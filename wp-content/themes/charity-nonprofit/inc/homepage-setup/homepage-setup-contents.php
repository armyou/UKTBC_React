<?php
/**
 * Wizard
 *
 * @package Charity_Nonprofit_Whizzie
 * @author Catapult Themes
 * @since 1.0.0
 */

class Charity_Nonprofit_Whizzie {
	
	protected $version = '1.1.0';
	
	/** @var string Current theme name, used as namespace in actions. */
	protected $charity_nonprofit_theme_name = '';
	protected $charity_nonprofit_theme_title = '';
	
	/** @var string Wizard page slug and title. */
	protected $charity_nonprofit_page_slug = '';
	protected $charity_nonprofit_page_title = '';
	
	/** @var array Wizard steps set by user. */
	protected $config_steps = array();
	
	public $parent_slug;
	
	/**
	 * Constructor
	 *
	 * @param $config	Our config parameters
	 */
	public function __construct( $config ) {
		$this->set_vars( $config );
		$this->init();
	}
	
	/**
	 * Set some settings
	 * @since 1.0.0
	 * @param $config	Our config parameters
	 */
	public function set_vars( $config ) {

		if( isset( $config['charity_nonprofit_page_slug'] ) ) {
			$this->charity_nonprofit_page_slug = esc_attr( $config['charity_nonprofit_page_slug'] );
		}
		if( isset( $config['charity_nonprofit_page_title'] ) ) {
			$this->charity_nonprofit_page_title = esc_attr( $config['charity_nonprofit_page_title'] );
		}
		if( isset( $config['steps'] ) ) {
			$this->config_steps = $config['steps'];
		}

		$charity_nonprofit_current_theme = wp_get_theme();
		$this->charity_nonprofit_theme_title = $charity_nonprofit_current_theme->get( 'Name' );
		$this->charity_nonprofit_theme_name = strtolower( preg_replace( '#[^a-zA-Z]#', '', $charity_nonprofit_current_theme->get( 'Name' ) ) );
		$this->charity_nonprofit_page_slug = apply_filters( $this->charity_nonprofit_theme_name . '_theme_setup_wizard_charity_nonprofit_page_slug', $this->charity_nonprofit_theme_name . '-wizard' );
		$this->parent_slug = apply_filters( $this->charity_nonprofit_theme_name . '_theme_setup_wizard_parent_slug', '' );

	}
	
	/**
	 * Hooks and filters
	 * @since 1.0.0
	 */	
	public function init() {

		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		add_action( 'admin_menu', array( $this, 'menu_page' ) );
		add_action( 'wp_ajax_charity_nonprofit_setup_widgets', array( $this, 'charity_nonprofit_setup_widgets' ) );
		
	}
	
	public function enqueue_scripts() {
		wp_enqueue_style( 'charity-nonprofit-homepage-setup-style', get_template_directory_uri() . '/inc/homepage-setup/assets/css/homepage-setup-style.css');
		wp_register_script( 'charity-nonprofit-homepage-setup-script', get_template_directory_uri() . '/inc/homepage-setup/assets/js/homepage-setup-script.js', array( 'jquery' ), time() );
		wp_localize_script( 
			'charity-nonprofit-homepage-setup-script',
			'whizzie_params',
			array(
				'ajaxurl' 		=> admin_url( 'admin-ajax.php' ),
				'wpnonce' 		=> wp_create_nonce( 'whizzie_nonce' ),
				'verify_text'	=> esc_html( 'verifying', 'charity-nonprofit' )
			)
		);
		wp_enqueue_script( 'charity-nonprofit-homepage-setup-script' );
	}
	
	public static function get_instance() {
		if ( ! self::$instance ) {
			self::$instance = new self;
		}
		return self::$instance;
	}
	
	/**
	 * Make a modal screen for the wizard
	 */
	public function menu_page() {
		add_theme_page( esc_html( $this->charity_nonprofit_page_title ), esc_html( $this->charity_nonprofit_page_title ), 'manage_options', $this->charity_nonprofit_page_slug, array( $this, 'wizard_page' ) );
	}
	
	/**
	 * Make an interface for the wizard
	 */
	public function wizard_page() {

		$url = wp_nonce_url( add_query_arg( array( 'plugins' => 'go' ) ), 'whizzie-setup' );
		$method = '';
		$fields = array_keys( $_POST );

		if ( false === ( $creds = request_filesystem_credentials( esc_url_raw( $url ), $method, false, false, $fields ) ) ) {
			return true;
		}

		if ( ! WP_Filesystem( $creds ) ) {
			request_filesystem_credentials( esc_url_raw( $url ), $method, true, false, $fields );
			return true;
		}

		$charity_nonprofit_theme = wp_get_theme();
		$charity_nonprofit_theme_title = $charity_nonprofit_theme->get( 'Name' );
		$charity_nonprofit_theme_version = $charity_nonprofit_theme->get( 'Version' );

		?>
		<div class="wrap">
			<?php
				printf( '<h1>%s %s</h1>', esc_html( $charity_nonprofit_theme_title ), esc_html( '(Version :- ' . $charity_nonprofit_theme_version . ')' ) );
			?>
			<div class="homepage-setup">
				<div class="homepage-setup-theme-bundle">
					<div class="homepage-setup-theme-bundle-one">
						<h1><?php echo esc_html__( 'WP Theme Bundle', 'charity-nonprofit' ); ?></h1>
						<p><?php echo wp_kses_post( 'Get <span>15% OFF</span> on all WordPress themes! Use code <span>"BNDL15OFF"</span> at checkout. Limited time offer!' ); ?></p>
					</div>
					<div class="homepage-setup-theme-bundle-two">
						<p><?php echo wp_kses_post( 'Extra <span>15%</span> OFF' ); ?></p>
					</div>
					<div class="homepage-setup-theme-bundle-three">
						<img src="<?php echo esc_url( get_template_directory_uri() . '/inc/homepage-setup/assets/homepage-setup-images/bundle-banner.png' ); ?>" alt="<?php echo esc_attr__( 'Theme Bundle Image', 'charity-nonprofit' ); ?>">
					</div>
					<div class="homepage-setup-theme-bundle-four">
						<p><?php echo wp_kses_post( '<span>$2795</span>$69' ); ?></p>
						<a target="_blank" href="<?php echo esc_url( CHARITY_NONPROFIT_BUNDLE_BUTTON ); ?>"><?php echo esc_html__( 'SHOP NOW', 'charity-nonprofit' ); ?> <span class="dashicons dashicons-arrow-right-alt2"></span></a>
					</div>
				</div>
			</div>
			
			<div class="card whizzie-wrap">
				<div class="demo_content_image">
					<div class="demo_content">
						<?php
							$charity_nonprofit_steps = $this->get_steps();
							echo '<ul class="whizzie-menu">';
							foreach ( $charity_nonprofit_steps as $charity_nonprofit_step ) {
								$class = 'step step-' . esc_attr( $charity_nonprofit_step['id'] );
								echo '<li data-step="' . esc_attr( $charity_nonprofit_step['id'] ) . '" class="' . esc_attr( $class ) . '">';
								printf( '<h2>%s</h2>', esc_html( $charity_nonprofit_step['title'] ) );

								$content = call_user_func( array( $this, $charity_nonprofit_step['view'] ) );
								if ( isset( $content['summary'] ) ) {
									printf(
										'<div class="summary">%s</div>',
										wp_kses_post( $content['summary'] )
									);
								}
								if ( isset( $content['detail'] ) ) {
									printf(
										'<div class="detail">%s</div>',
										wp_kses_post( $content['detail'] )
									);
								}
								if ( isset( $charity_nonprofit_step['button_text'] ) && $charity_nonprofit_step['button_text'] ) {
									printf( 
										'<div class="button-wrap"><a href="#" class="button button-primary do-it" data-callback="%s" data-step="%s">%s</a></div>',
										esc_attr( $charity_nonprofit_step['callback'] ),
										esc_attr( $charity_nonprofit_step['id'] ),
										esc_html( $charity_nonprofit_step['button_text'] )
									);
								}
								echo '</li>';
							}
							echo '</ul>';
						?>
						
						<ul class="whizzie-nav">
							<?php
							$step_number = 1;	
							foreach ( $charity_nonprofit_steps as $charity_nonprofit_step ) {
								echo '<li class="nav-step-' . esc_attr( $charity_nonprofit_step['id'] ) . '">';
								echo '<span class="step-number">' . esc_html( $step_number ) . '</span>';
								echo '</li>';
								$step_number++;
							}
							?>
							<div class="blank-border"></div>
						</ul>

						<div class="homepage-setup-links">
							<div class="homepage-setup-links buttons">
								<a href="<?php echo esc_url( CHARITY_NONPROFIT_LITE_DOCS_PRO ); ?>" target="_blank" class="button button-primary"><?php echo esc_html__( 'Free Documentation', 'charity-nonprofit' ); ?></a>
								<a href="<?php echo esc_url( CHARITY_NONPROFIT_BUY_NOW ); ?>" class="button button-primary" target="_blank"><?php echo esc_html__( 'Get Premium', 'charity-nonprofit' ); ?></a>
								<a href="<?php echo esc_url( CHARITY_NONPROFIT_DEMO_PRO ); ?>" class="button button-primary" target="_blank"><?php echo esc_html__( 'Premium Demo', 'charity-nonprofit' ); ?></a>
								<a href="<?php echo esc_url( CHARITY_NONPROFIT_SUPPORT_FREE ); ?>" target="_blank" class="button button-primary"><?php echo esc_html__( 'Support Forum', 'charity-nonprofit' ); ?></a>
							</div>
						</div> <!-- .demo_image -->

						<div class="step-loading"><span class="spinner"></span></div>
					</div> <!-- .demo_content -->

					<div class="homepage-setup-image">
						<div class="homepage-setup-theme-buynow">
							<div class="homepage-setup-theme-buynow-one">
								<h1><?php echo wp_kses_post( 'Non Profit<br>WordPress Theme' ); ?></h1>
								<p><?php echo wp_kses_post( '<span>25%<br>Off</span> SHOP NOW' ); ?></p>
							</div>
							<div class="homepage-setup-theme-buynow-two">
								<img src="<?php echo esc_url( get_template_directory_uri() . '/inc/homepage-setup/assets/homepage-setup-images/charity-nonprofit.png' ); ?>" alt="<?php echo esc_attr__( 'Theme Bundle Image', 'charity-nonprofit' ); ?>">
							</div>
							<div class="homepage-setup-theme-buynow-three">
								<p><?php echo wp_kses_post( 'Get <span>25% OFF</span> on Premium Non Profit WordPress Theme Use code <span>"NYTHEMES25"</span> at checkout.' ); ?></p>
							</div>
							<div class="homepage-setup-theme-buynow-four">
								<a target="_blank" href="<?php echo esc_url( CHARITY_NONPROFIT_BUY_NOW ); ?>"><?php echo esc_html__( 'Upgrade To Pro With Just $40', 'charity-nonprofit' ); ?></a>
							</div>
						</div>
					</div> <!-- .demo_image -->

				</div> <!-- .demo_content_image -->
			</div> <!-- .whizzie-wrap -->
		</div> <!-- .wrap -->
		<?php
	}


	/**
	 * Set options for the steps
	 * Incorporate any options set by the theme dev
	 * Return the array for the steps
	 * @return Array
	 */
	public function get_steps() {
		$charity_nonprofit_dev_steps = $this->config_steps;
		$charity_nonprofit_steps = array(
			'widgets' => array(
				'id'			=> 'widgets',
				'title'			=> __( 'Setup Home Page', 'charity-nonprofit' ),
				'icon'			=> 'welcome-widgets-menus',
				'view'			=> 'get_step_widgets',
				'callback'		=> 'charity_nonprofit_install_widgets',
				'button_text'	=> __( 'Start Home Page Setup', 'charity-nonprofit' ),
				'can_skip'		=> false
			),
			'done' => array(
				'id'			=> 'done',
				'title'			=> __( 'Customize Your Site', 'charity-nonprofit' ),
				'icon'			=> 'yes',
				'view'			=> 'get_step_done',
				'callback'		=> ''
			)
		);
		
		// Iterate through each step and replace with dev config values
		if( $charity_nonprofit_dev_steps ) {
			// Configurable elements - these are the only ones the dev can update from homepage-setup-settings.php
			$can_config = array( 'title', 'icon', 'button_text', 'can_skip' );
			foreach( $charity_nonprofit_dev_steps as $charity_nonprofit_dev_step ) {
				// We can only proceed if an ID exists and matches one of our IDs
				if( isset( $charity_nonprofit_dev_step['id'] ) ) {
					$id = $charity_nonprofit_dev_step['id'];
					if( isset( $charity_nonprofit_steps[$id] ) ) {
						foreach( $can_config as $element ) {
							if( isset( $charity_nonprofit_dev_step[$element] ) ) {
								$charity_nonprofit_steps[$id][$element] = $charity_nonprofit_dev_step[$element];
							}
						}
					}
				}
			}
		}
		return $charity_nonprofit_steps;
	}
	
	/**
	 * Print the content for the widgets step
	 * @since 1.1.0
	 */
	public function get_step_widgets() { ?> <?php }
	
	/**
	 * Print the content for the final step
	 */
	public function get_step_done() { ?>
		<div id="charity-nonprofit-demo-setup-guid">
			<div class="customize_div">
				<div class="customize_div finish">
					<div class="customize_div finish btns">
						<h3><?php echo esc_html( 'Your Site Is Ready To View' ); ?></h3>
						<div class="btnsss">
							<a target="_blank" href="<?php echo esc_url( get_home_url() ); ?>" class="button button-primary">
								<?php esc_html_e( 'View Your Site', 'charity-nonprofit' ); ?>
							</a>
							<a target="_blank" href="<?php echo esc_url( admin_url( 'customize.php' ) ); ?>" class="button button-primary">
								<?php esc_html_e( 'Customize Your Site', 'charity-nonprofit' ); ?>
							</a>
							<a href="<?php echo esc_url(admin_url()); ?>" class="button button-primary">
								<?php esc_html_e( 'Finsh', 'charity-nonprofit' ); ?>
							</a>
						</div>
					</div>
					<div class="charity-nonprofit-setup-finish">
						<img src="<?php echo esc_url( get_template_directory_uri() . '/screenshot.png' ); ?>"/>
					</div>
				</div>
			</div>
		</div>
	<?php }


	public function charity_nonprofit_customizer_nav_menu() {

		/* -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- Charity Nonprofit Primary Menu -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/

		$charity_nonprofit_themename = 'Charity Nonprofit';
		$charity_nonprofit_menuname = $charity_nonprofit_themename . ' Primary Menu';
		$charity_nonprofit_menulocation = 'charity-nonprofit-primary-menu';
		$charity_nonprofit_menu_exists = wp_get_nav_menu_object($charity_nonprofit_menuname);

		if (!$charity_nonprofit_menu_exists) {
			$charity_nonprofit_menu_id = wp_create_nav_menu($charity_nonprofit_menuname);

			// Home
			wp_update_nav_menu_item($charity_nonprofit_menu_id, 0, array(
				'menu-item-title' => __('Home', 'charity-nonprofit'),
				'menu-item-classes' => 'home',
				'menu-item-url' => home_url('/'),
				'menu-item-status' => 'publish'
			));

			// About
			$charity_nonprofit_page_about = get_page_by_path('about');
			if($charity_nonprofit_page_about){
				wp_update_nav_menu_item($charity_nonprofit_menu_id, 0, array(
					'menu-item-title' => __('About', 'charity-nonprofit'),
					'menu-item-classes' => 'about',
					'menu-item-url' => get_permalink($charity_nonprofit_page_about),
					'menu-item-status' => 'publish'
				));
			}

			// Services
			$charity_nonprofit_page_services = get_page_by_path('services');
			if($charity_nonprofit_page_services){
				wp_update_nav_menu_item($charity_nonprofit_menu_id, 0, array(
					'menu-item-title' => __('Services', 'charity-nonprofit'),
					'menu-item-classes' => 'services',
					'menu-item-url' => get_permalink($charity_nonprofit_page_services),
					'menu-item-status' => 'publish'
				));
			}

			// Shop Page (WooCommerce)
			if (class_exists('WooCommerce')) {
				$charity_nonprofit_shop_page_id = wc_get_page_id('shop');
				if ($charity_nonprofit_shop_page_id) {
					wp_update_nav_menu_item($charity_nonprofit_menu_id, 0, array(
						'menu-item-title' => __('Shop', 'charity-nonprofit'),
						'menu-item-classes' => 'shop',
						'menu-item-url' => get_permalink($charity_nonprofit_shop_page_id),
						'menu-item-status' => 'publish'
					));
				}
			}

			// Blog
			$charity_nonprofit_page_blog = get_page_by_path('blog');
			if($charity_nonprofit_page_blog){
				wp_update_nav_menu_item($charity_nonprofit_menu_id, 0, array(
					'menu-item-title' => __('Blog', 'charity-nonprofit'),
					'menu-item-classes' => 'blog',
					'menu-item-url' => get_permalink($charity_nonprofit_page_blog),
					'menu-item-status' => 'publish'
				));
			}

			// 404 Page
			$charity_nonprofit_notfound = get_page_by_path('404 Page');
			if($charity_nonprofit_notfound){
				wp_update_nav_menu_item($charity_nonprofit_menu_id, 0, array(
					'menu-item-title' => __('404 Page', 'charity-nonprofit'),
					'menu-item-classes' => '404',
					'menu-item-url' => get_permalink($charity_nonprofit_notfound),
					'menu-item-status' => 'publish'
				));
			}

			if (!has_nav_menu($charity_nonprofit_menulocation)) {
				$charity_nonprofit_locations = get_theme_mod('nav_menu_locations');
				$charity_nonprofit_locations[$charity_nonprofit_menulocation] = $charity_nonprofit_menu_id;
				set_theme_mod('nav_menu_locations', $charity_nonprofit_locations);
			}
		}
	}

	
	/**
	 * Imports the Demo Content
	 * @since 1.1.0
	 */
	public function charity_nonprofit_setup_widgets(){

		/* -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- MENUS PAGES -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
		
			// Creation of home page //
			$charity_nonprofit_home_content = '';
			$charity_nonprofit_home_title = 'Home';
			$charity_nonprofit_home = array(
					'post_type' => 'page',
					'post_title' => $charity_nonprofit_home_title,
					'post_content'  => $charity_nonprofit_home_content,
					'post_status' => 'publish',
					'post_author' => 1,
					'post_slug' => 'home'
			);
			$charity_nonprofit_home_id = wp_insert_post($charity_nonprofit_home);

			add_post_meta( $charity_nonprofit_home_id, '_wp_page_template', 'frontpage.php' );

			$charity_nonprofit_home = get_page_by_path( 'Home' );
			update_option( 'page_on_front', $charity_nonprofit_home->ID );
			update_option( 'show_on_front', 'page' );

			// Creation of blog page //
			$charity_nonprofit_blog_title = 'Blog';
			$charity_nonprofit_blog_check = get_page_by_path('blog');
			if (!$charity_nonprofit_blog_check) {
				$charity_nonprofit_blog = array(
					'post_type'    => 'page',
					'post_title'   => $charity_nonprofit_blog_title,
					'post_status'  => 'publish',
					'post_author'  => 1,
					'post_name'    => 'blog'
				);
				$charity_nonprofit_blog_id = wp_insert_post($charity_nonprofit_blog);

				if (!is_wp_error($charity_nonprofit_blog_id)) {
					update_option('page_for_posts', $charity_nonprofit_blog_id);
				}
			}

			// Creation of about page //
			$charity_nonprofit_about_title = 'About';
			$charity_nonprofit_about_content = 'What is Lorem Ipsum?
														Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
														&nbsp;
														Why do we use it?
														It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
														&nbsp;
														Where does it come from?
														There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
														&nbsp;
														Why do we use it?
														It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
														&nbsp;
														Where does it come from?
														There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.';
			$charity_nonprofit_about_check = get_page_by_path('about');
			if (!$charity_nonprofit_about_check) {
				$charity_nonprofit_about = array(
					'post_type'    => 'page',
					'post_title'   => $charity_nonprofit_about_title,
					'post_content'   => $charity_nonprofit_about_content,
					'post_status'  => 'publish',
					'post_author'  => 1,
					'post_name'    => 'about'
				);
				wp_insert_post($charity_nonprofit_about);
			}

			// Creation of services page //
			$charity_nonprofit_services_title = 'Services';
			$charity_nonprofit_services_content = 'What is Lorem Ipsum?
														Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
														&nbsp;
														Why do we use it?
														It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
														&nbsp;
														Where does it come from?
														There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
														&nbsp;
														Why do we use it?
														It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
														&nbsp;
														Where does it come from?
														There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.';
			$charity_nonprofit_services_check = get_page_by_path('services');
			if (!$charity_nonprofit_services_check) {
				$charity_nonprofit_services = array(
					'post_type'    => 'page',
					'post_title'   => $charity_nonprofit_services_title,
					'post_content'   => $charity_nonprofit_services_content,
					'post_status'  => 'publish',
					'post_author'  => 1,
					'post_name'    => 'services'
				);
				wp_insert_post($charity_nonprofit_services);
			}

			// Creation of 404 page //
			$charity_nonprofit_notfound_title = '404 Page';
			$charity_nonprofit_notfound = array(
				'post_type'   => 'page',
				'post_title'  => $charity_nonprofit_notfound_title,
				'post_status' => 'publish',
				'post_author' => 1,
				'post_slug'   => '404'
			);
			$charity_nonprofit_notfound_id = wp_insert_post($charity_nonprofit_notfound);
			add_post_meta($charity_nonprofit_notfound_id, '_wp_page_template', '404.php');


		/* -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- SLIDER POST -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/

			$charity_nonprofit_slider_title = array('Give A Helping Hand To The Homeless');
			for($charity_nonprofit_i=1;$charity_nonprofit_i<=1;$charity_nonprofit_i++){

				$charity_nonprofit_title = $charity_nonprofit_slider_title[$charity_nonprofit_i-1];
				$charity_nonprofit_content = 'In id enim odio. Nunc aliquet diam tortor.';

				// Create post object
				$charity_nonprofit_my_post = array(
						'post_title'    => wp_strip_all_tags( $charity_nonprofit_title ),
						'post_content'  => $charity_nonprofit_content,
						'post_status'   => 'publish',
						'post_type'     => 'post',
				);
				// Insert the post into the database
				$charity_nonprofit_post_id = wp_insert_post( $charity_nonprofit_my_post );

				wp_set_object_terms($charity_nonprofit_post_id, 'Slider', 'category', true);

				wp_set_object_terms($charity_nonprofit_post_id, 'Slider', 'post_tag', true);

				$charity_nonprofit_image_url = get_template_directory_uri().'/inc/homepage-setup/assets/homepage-setup-images/slider-img'.$charity_nonprofit_i.'.png';

				$charity_nonprofit_image_name= 'slider-img'.$charity_nonprofit_i.'.png';
				$upload_dir       = wp_upload_dir();
				// Set upload folder
				$charity_nonprofit_image_data       = file_get_contents($charity_nonprofit_image_url);
				// Get image data
				$unique_file_name = wp_unique_filename( $upload_dir['path'], $charity_nonprofit_image_name );

				$charity_nonprofit_filename = basename( $unique_file_name ); 
				
				// Check folder permission and define file location
				if( wp_mkdir_p( $upload_dir['path'] ) ) {
						$charity_nonprofit_file = $upload_dir['path'] . '/' . $charity_nonprofit_filename;
				} else {
						$charity_nonprofit_file = $upload_dir['basedir'] . '/' . $charity_nonprofit_filename;
				}
				// Create the image  file on the server
				// Generate unique name
				if ( ! function_exists( 'WP_Filesystem' ) ) {
					require_once( ABSPATH . 'wp-admin/includes/file.php' );
				}
				
				WP_Filesystem();
				global $wp_filesystem;
				
				if ( ! $wp_filesystem->put_contents( $charity_nonprofit_file, $charity_nonprofit_image_data, FS_CHMOD_FILE ) ) {
					wp_die( 'Error saving file!' );
				}
				// Check image file type
				$wp_filetype = wp_check_filetype( $charity_nonprofit_filename, null );
				// Set attachment data
				$charity_nonprofit_attachment = array(
						'post_mime_type' => $wp_filetype['type'],
						'post_title'     => sanitize_file_name( $charity_nonprofit_filename ),
						'post_content'   => '',
						'post_type'     => 'post',
						'post_status'    => 'inherit'
				);
				// Create the attachment
				$charity_nonprofit_attach_id = wp_insert_attachment( $charity_nonprofit_attachment, $charity_nonprofit_file, $charity_nonprofit_post_id );
				// Include image.php
				require_once(ABSPATH . 'wp-admin/includes/image.php');
				// Define attachment metadata
				$charity_nonprofit_attach_data = wp_generate_attachment_metadata( $charity_nonprofit_attach_id, $charity_nonprofit_file );
				// Assign metadata to attachment
					wp_update_attachment_metadata( $charity_nonprofit_attach_id, $charity_nonprofit_attach_data );
				// And finally assign featured image to post
				set_post_thumbnail( $charity_nonprofit_post_id, $charity_nonprofit_attach_id );

			 }


			$charity_nonprofit_slider_count=array('150+','90+','200+','100+','900+','20+','130+','190+','110+');
			for($charity_nonprofit_i=1;$charity_nonprofit_i<=9;$charity_nonprofit_i++) {
				set_theme_mod( 'charity_nonprofit_header_layout_slider_count'.$charity_nonprofit_i, $charity_nonprofit_slider_count[$charity_nonprofit_i-1] );
			}

        
        $this->charity_nonprofit_customizer_nav_menu();

	    exit;
	}
}