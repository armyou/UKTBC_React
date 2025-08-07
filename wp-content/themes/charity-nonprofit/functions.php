<?php
/**
 * Charity Nonprofit functions and definitions
 * @package Charity Nonprofit
 */

if ( ! function_exists( 'charity_nonprofit_after_theme_support' ) ) :

	function charity_nonprofit_after_theme_support() {
		
		add_theme_support( 'automatic-feed-links' );

		add_theme_support('woocommerce');
        add_theme_support('wc-product-gallery-zoom');
        add_theme_support('wc-product-gallery-lightbox');
        add_theme_support('wc-product-gallery-slider');
        add_theme_support('woocommerce', array(
            'gallery_thumbnail_image_width' => 300,
        ));

		add_theme_support(
			'custom-background',
			array(
				'default-color' => 'ffffff',
			)
		);

		$GLOBALS['content_width'] = apply_filters( 'charity_nonprofit_content_width', 1140 );
		
		add_theme_support( 'post-thumbnails' );

		add_theme_support(
			'custom-logo',
			array(
				'height'      => 270,
				'width'       => 90,
				'flex-height' => true,
				'flex-width'  => true,
			)
		);
		
		add_theme_support( 'title-tag' );

		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'script',
				'style',
			)
		);

		add_theme_support( 'post-formats', array(
		    'video',
		    'audio',
		    'gallery',
		    'quote',
		    'image'
		) );
		
		add_theme_support( 'align-wide' );
		add_theme_support( 'responsive-embeds' );
		add_theme_support( 'wp-block-styles' );

		require get_template_directory() . '/inc/metabox.php';
		require get_template_directory() . '/inc/homepage-setup/homepage-setup-settings.php';

		if (! defined( 'CHARITY_NONPROFIT_DOCS_PRO' ) ){
		define('CHARITY_NONPROFIT_DOCS_PRO',__('https://layout.omegathemes.com/steps/pro-charity-nonprofit/','charity-nonprofit'));
		}
		if (! defined( 'CHARITY_NONPROFIT_BUY_NOW' ) ){
		define('CHARITY_NONPROFIT_BUY_NOW',__('https://www.omegathemes.com/products/non-profit-wordpress-theme','charity-nonprofit'));
		}
		if (! defined( 'CHARITY_NONPROFIT_SUPPORT_FREE' ) ){
		define('CHARITY_NONPROFIT_SUPPORT_FREE',__('https://wordpress.org/support/theme/charity-nonprofit/','charity-nonprofit'));
		}
		if (! defined( 'CHARITY_NONPROFIT_REVIEW_FREE' ) ){
		define('CHARITY_NONPROFIT_REVIEW_FREE',__('https://wordpress.org/support/theme/charity-nonprofit/reviews/#new-post/','charity-nonprofit'));
		}
		if (! defined( 'CHARITY_NONPROFIT_DEMO_PRO' ) ){
		define('CHARITY_NONPROFIT_DEMO_PRO',__('https://layout.omegathemes.com/charity-nonprofit/','charity-nonprofit'));
		}
		if (! defined( 'CHARITY_NONPROFIT_LITE_DOCS_PRO' ) ){
		define('CHARITY_NONPROFIT_LITE_DOCS_PRO',__('https://layout.omegathemes.com/steps/free-charity-nonprofit/','charity-nonprofit'));
		}
		if (! defined( 'CHARITY_NONPROFIT_BUNDLE_BUTTON' ) ){
			define('CHARITY_NONPROFIT_BUNDLE_BUTTON',__('https://www.omegathemes.com/products/wp-theme-bundle','charity-nonprofit'));
		}

	}

endif;

add_action( 'after_setup_theme', 'charity_nonprofit_after_theme_support' );

/**
 * Register and Enqueue Styles.
 */
function charity_nonprofit_register_styles() {

	wp_enqueue_style( 'dashicons' );

    $charity_nonprofit_theme_version = wp_get_theme()->get( 'Version' );
	$charity_nonprofit_fonts_url = charity_nonprofit_fonts_url();
    if( $charity_nonprofit_fonts_url ){
    	require_once get_theme_file_path( 'lib/custom/css/wptt-webfont-loader.php' );
        wp_enqueue_style(
			'charity-nonprofit-google-fonts',
			wptt_get_webfont_url( $charity_nonprofit_fonts_url ),
			array(),
			$charity_nonprofit_theme_version
		);
    }

    wp_enqueue_style( 'swiper', get_template_directory_uri() . '/lib/swiper/css/swiper-bundle.min.css');
	wp_enqueue_style( 'charity-nonprofit-style', get_stylesheet_uri(), array(), $charity_nonprofit_theme_version );

	wp_enqueue_style( 'charity-nonprofit-style', get_stylesheet_uri() );
	require get_parent_theme_file_path( '/custom_css.php' );
	wp_add_inline_style( 'charity-nonprofit-style',$charity_nonprofit_custom_css );

	$charity_nonprofit_css = '';

	if ( get_header_image() ) :

		$charity_nonprofit_css .=  '
			.main-header{
				background-image: url('.esc_url(get_header_image()).') !important;
				-webkit-background-size: cover !important;
				-moz-background-size: cover !important;
				-o-background-size: cover !important;
				background-size: cover !important;
			}';

	endif;

	wp_add_inline_style( 'charity-nonprofit-style', $charity_nonprofit_css );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}	

	wp_enqueue_script( 'imagesloaded' );
    wp_enqueue_script( 'masonry' );
	wp_enqueue_script( 'swiper', get_template_directory_uri() . '/lib/swiper/js/swiper-bundle.min.js', array('jquery'), '', 1);
	wp_enqueue_script( 'charity-nonprofit-custom', get_template_directory_uri() . '/lib/custom/js/theme-custom-script.js', array('jquery'), '', 1);

    // Global Query
    if( is_front_page() ){

    	$charity_nonprofit_posts_per_page = absint( get_option('posts_per_page') );
        $charity_nonprofit_c_paged = ( get_query_var( 'page' ) ) ? absint( get_query_var( 'page' ) ) : 1;
        $charity_nonprofit_posts_args = array(
            'posts_per_page'        => $charity_nonprofit_posts_per_page,
            'paged'                 => $charity_nonprofit_c_paged,
        );
        $charity_nonprofit_posts_qry = new WP_Query( $charity_nonprofit_posts_args );
        $max = $charity_nonprofit_posts_qry->max_num_pages;

    }else{
        global $wp_query;
        $max = $wp_query->max_num_pages;
        $charity_nonprofit_c_paged = ( get_query_var( 'paged' ) > 1 ) ? get_query_var( 'paged' ) : 1;
    }

    $charity_nonprofit_default = charity_nonprofit_get_default_theme_options();
    $charity_nonprofit_pagination_layout = get_theme_mod( 'charity_nonprofit_pagination_layout',$charity_nonprofit_default['charity_nonprofit_pagination_layout'] );
}

add_action( 'wp_enqueue_scripts', 'charity_nonprofit_register_styles',200 );

function charity_nonprofit_admin_enqueue_scripts_callback() {
    if ( ! did_action( 'wp_enqueue_media' ) ) {
    wp_enqueue_media();
    }
    wp_enqueue_script('charity-nonprofit-uploaderjs', get_stylesheet_directory_uri() . '/lib/custom/js/uploader.js', array(), "1.0", true);
}
add_action( 'admin_enqueue_scripts', 'charity_nonprofit_admin_enqueue_scripts_callback' );

/**
 * Register navigation menus uses wp_nav_menu in five places.
 */
function charity_nonprofit_menus() {

	$charity_nonprofit_locations = array(
		'charity-nonprofit-primary-menu'  => esc_html__( 'Primary Menu', 'charity-nonprofit' ),
	);

	register_nav_menus( $charity_nonprofit_locations );
}

add_action( 'init', 'charity_nonprofit_menus' );

add_filter('loop_shop_columns', 'charity_nonprofit_loop_columns');
if (!function_exists('charity_nonprofit_loop_columns')) {
	function charity_nonprofit_loop_columns() {
		$charity_nonprofit_columns = get_theme_mod( 'charity_nonprofit_per_columns', 3 );
		return $charity_nonprofit_columns;
	}
}

add_filter( 'loop_shop_per_page', 'charity_nonprofit_per_page', 20 );
function charity_nonprofit_per_page( $charity_nonprofit_cols ) {
  	$charity_nonprofit_cols = get_theme_mod( 'charity_nonprofit_product_per_page', 9 );
	return $charity_nonprofit_cols;
}

add_filter( 'woocommerce_output_related_products_args', 'charity_nonprofit_products_args' );

function charity_nonprofit_products_args( $charity_nonprofit_args ) {

    $charity_nonprofit_args['posts_per_page'] = get_theme_mod( 'charity_nonprofit_custom_related_products_number', 6 );

    $charity_nonprofit_args['columns'] = get_theme_mod( 'charity_nonprofit_custom_related_products_number_per_row', 3 );

    return $charity_nonprofit_args;
}

require get_template_directory() . '/inc/custom-header.php';
require get_template_directory() . '/classes/class-svg-icons.php';
require get_template_directory() . '/classes/class-walker-menu.php';
require get_template_directory() . '/inc/customizer/customizer.php';
require get_template_directory() . '/inc/custom-functions.php';
require get_template_directory() . '/inc/template-tags.php';
require get_template_directory() . '/classes/body-classes.php';
require get_template_directory() . '/inc/widgets/widgets.php';
require get_template_directory() . '/inc/pagination.php';
require get_template_directory() . '/lib/breadcrumbs/breadcrumbs.php';
require get_template_directory() . '/lib/custom/css/dynamic-style.php';


function charity_nonprofit_remove_customize_register() {
    global $wp_customize;

    $wp_customize->remove_setting( 'display_header_text' );
    $wp_customize->remove_control( 'display_header_text' );

}

add_action( 'customize_register', 'charity_nonprofit_remove_customize_register', 11 );

// Apply styles based on customizer settings

function charity_nonprofit_radio_sanitize(  $charity_nonprofit_input, $charity_nonprofit_setting  ) {
	$charity_nonprofit_input = sanitize_key( $charity_nonprofit_input );
	$charity_nonprofit_choices = $charity_nonprofit_setting->manager->get_control( $charity_nonprofit_setting->id )->choices;
	return ( array_key_exists( $charity_nonprofit_input, $charity_nonprofit_choices ) ? $charity_nonprofit_input : $charity_nonprofit_setting->default );
}
require get_template_directory() . '/inc/general.php';

function charity_nonprofit_sticky_sidebar_enabled() {
    $charity_nonprofit_sticky_sidebar = get_theme_mod('charity_nonprofit_sticky_sidebar', true);
    
    if ($charity_nonprofit_sticky_sidebar == false) {
        $charity_nonprofit_custom_css = ".widget-area-wrapper { position: relative !important; }";
        wp_add_inline_style('charity-nonprofit-style', $charity_nonprofit_custom_css);
    }
}
add_action('wp_enqueue_scripts', 'charity_nonprofit_sticky_sidebar_enabled');


// NOTICE FUNCTION

function charity_nonprofit_admin_notice() { 
    global $pagenow;
    $theme_args = wp_get_theme();
    $meta = get_option( 'charity_nonprofit_admin_notice' );
    $name = $theme_args->get( 'Name' );
    $current_screen = get_current_screen();

    if ( ! $meta ) {
        if ( is_network_admin() ) {
            return;
        }

        if ( ! current_user_can( 'manage_options' ) ) {
            return;
        }

        if ( $current_screen->base != 'appearance_page_charitynonprofit-wizard' ) {
            ?>
            <div class="notice notice-success notice-content">
                <h2><?php esc_html_e('Welcome! Thank you for choosing Charity Nonprofit. Let’s Set Up Your Website!', 'charity-nonprofit') ?> </h2>
                <p><?php esc_html_e('Before you dive into customization, let’s go through a quick setup process to ensure everything runs smoothly. Click below to start setting up your website in minutes!', 'charity-nonprofit') ?> </p>
                <div class="info-link">
                    <a href="<?php echo esc_url( admin_url( 'themes.php?page=charitynonprofit-wizard' ) ); ?>"><?php esc_html_e('Get Started with Charity Nonprofit', 'charity-nonprofit'); ?></a>
                </div>
                <p class="dismiss-link"><strong><a href="?charity_nonprofit_admin_notice=1"><?php esc_html_e( 'Dismiss', 'charity-nonprofit' ); ?></a></strong></p>
            </div>
            <?php
        }
    }
}
add_action( 'admin_notices', 'charity_nonprofit_admin_notice' );

if ( ! function_exists( 'charity_nonprofit_update_admin_notice' ) ) :
/**
 * Updating admin notice on dismiss
 */
function charity_nonprofit_update_admin_notice() {
    if ( isset( $_GET['charity_nonprofit_admin_notice'] ) && $_GET['charity_nonprofit_admin_notice'] == '1' ) {
        update_option( 'charity_nonprofit_admin_notice', true );
    }
}
endif;
add_action( 'admin_init', 'charity_nonprofit_update_admin_notice' );

// After Switch theme function
add_action( 'after_switch_theme', 'charity_nonprofit_getstart_setup_options' );
function charity_nonprofit_getstart_setup_options() {
    update_option( 'charity_nonprofit_admin_notice', false );
}