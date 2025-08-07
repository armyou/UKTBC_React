<?php
/**
 * Custom Functions.
 *
 * @package Charity Nonprofit
 */

if( !function_exists( 'charity_nonprofit_fonts_url' ) ) :

    //Google Fonts URL
    function charity_nonprofit_fonts_url(){

        $charity_nonprofit_font_families = array(
            'Cormorant:ital,wght@0,300..700;1,300..700',
            'Montserrat:ital,wght@0,100..900;1,100..900',
        );

        $charity_nonprofit_fonts_url = add_query_arg( array(
            'family' => implode( '&family=', $charity_nonprofit_font_families ),
            'display' => 'swap',
        ), 'https://fonts.googleapis.com/css2' );

        return esc_url_raw($charity_nonprofit_fonts_url);
    }

endif;

if ( ! function_exists( 'charity_nonprofit_sub_menu_toggle_button' ) ) :

    function charity_nonprofit_sub_menu_toggle_button( $charity_nonprofit_args, $charity_nonprofit_item, $depth ) {

        // Add sub menu toggles to the main menu with toggles
        if ( $charity_nonprofit_args->theme_location == 'charity-nonprofit-primary-menu' && isset( $charity_nonprofit_args->show_toggles ) ) {
            
            // Wrap the menu item link contents in a div, used for positioning
            $charity_nonprofit_args->before = '<div class="submenu-wrapper">';
            $charity_nonprofit_args->after  = '';

            // Add a toggle to items with children
            if ( in_array( 'menu-item-has-children', $charity_nonprofit_item->classes ) ) {

                $charity_nonprofit_toggle_target_string = '.menu-item.menu-item-' . $charity_nonprofit_item->ID . ' > .sub-menu';

                // Add the sub menu toggle
                $charity_nonprofit_args->after .= '<button type="button" class="theme-aria-button submenu-toggle" data-toggle-target="' . $charity_nonprofit_toggle_target_string . '" data-toggle-type="slidetoggle" data-toggle-duration="250" aria-expanded="false"><span class="btn__content" tabindex="-1"><span class="screen-reader-text">' . esc_html__( 'Show sub menu', 'charity-nonprofit' ) . '</span>' . charity_nonprofit_get_theme_svg( 'chevron-down' ) . '</span></button>';

            }

            // Close the wrapper
            $charity_nonprofit_args->after .= '</div><!-- .submenu-wrapper -->';
            // Add sub menu icons to the main menu without toggles (the fallback menu)

        }elseif( $charity_nonprofit_args->theme_location == 'charity-nonprofit-primary-menu' ) {

            if ( in_array( 'menu-item-has-children', $charity_nonprofit_item->classes ) ) {

                $charity_nonprofit_args->before = '<div class="link-icon-wrapper">';
                $charity_nonprofit_args->after  = charity_nonprofit_get_theme_svg( 'chevron-down' ) . '</div>';

            } else {

                $charity_nonprofit_args->before = '';
                $charity_nonprofit_args->after  = '';

            }

        }

        return $charity_nonprofit_args;

    }

endif;

add_filter( 'nav_menu_item_args', 'charity_nonprofit_sub_menu_toggle_button', 10, 3 );

if ( ! function_exists( 'charity_nonprofit_the_theme_svg' ) ):
    
    function charity_nonprofit_the_theme_svg( $charity_nonprofit_svg_name, $charity_nonprofit_return = false ) {

        if( $charity_nonprofit_return ){

            return charity_nonprofit_get_theme_svg( $charity_nonprofit_svg_name ); //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Escaped in charity_nonprofit_get_theme_svg();.

        }else{

            echo charity_nonprofit_get_theme_svg( $charity_nonprofit_svg_name ); //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Escaped in charity_nonprofit_get_theme_svg();.

        }
    }

endif;

if ( ! function_exists( 'charity_nonprofit_get_theme_svg' ) ):

    function charity_nonprofit_get_theme_svg( $charity_nonprofit_svg_name ) {

        // Make sure that only our allowed tags and attributes are included.
        $charity_nonprofit_svg = wp_kses(
            Charity_Nonprofit_SVG_Icons::get_svg( $charity_nonprofit_svg_name ),
            array(
                'svg'     => array(
                    'class'       => true,
                    'xmlns'       => true,
                    'width'       => true,
                    'height'      => true,
                    'viewbox'     => true,
                    'aria-hidden' => true,
                    'role'        => true,
                    'focusable'   => true,
                ),
                'path'    => array(
                    'fill'      => true,
                    'fill-rule' => true,
                    'd'         => true,
                    'transform' => true,
                ),
                'polygon' => array(
                    'fill'      => true,
                    'fill-rule' => true,
                    'points'    => true,
                    'transform' => true,
                    'focusable' => true,
                ),
                'polyline' => array(
                    'fill'      => true,
                    'points'    => true,
                ),
                'line' => array(
                    'fill'      => true,
                    'x1'      => true,
                    'x2' => true,
                    'y1'    => true,
                    'y2' => true,
                ),
            )
        );
        if ( ! $charity_nonprofit_svg ) {
            return false;
        }
        return $charity_nonprofit_svg;

    }

endif;

if( !function_exists( 'charity_nonprofit_post_category_list' ) ) :

    // Post Category List.
    function charity_nonprofit_post_category_list( $charity_nonprofit_select_cat = true ){

        $charity_nonprofit_post_cat_lists = get_categories(
            array(
                'hide_empty' => '0',
                'exclude' => '1',
            )
        );

        $charity_nonprofit_post_cat_cat_array = array();
        if( $charity_nonprofit_select_cat ){

            $charity_nonprofit_post_cat_cat_array[''] = esc_html__( '-- Select Category --','charity-nonprofit' );

        }

        foreach ( $charity_nonprofit_post_cat_lists as $charity_nonprofit_post_cat_list ) {

            $charity_nonprofit_post_cat_cat_array[$charity_nonprofit_post_cat_list->slug] = $charity_nonprofit_post_cat_list->name;

        }

        return $charity_nonprofit_post_cat_cat_array;
    }

endif;

if( !function_exists('charity_nonprofit_single_post_navigation') ):

    function charity_nonprofit_single_post_navigation(){

        $charity_nonprofit_default = charity_nonprofit_get_default_theme_options();
        $charity_nonprofit_twp_navigation_type = esc_attr( get_post_meta( get_the_ID(), 'charity_nonprofit_twp_disable_ajax_load_next_post', true ) );
        $charity_nonprofit_current_id = '';
        $article_wrap_class = '';
        global $post;
        $charity_nonprofit_current_id = $post->ID;
        if( $charity_nonprofit_twp_navigation_type == '' || $charity_nonprofit_twp_navigation_type == 'global-layout' ){
            $charity_nonprofit_twp_navigation_type = get_theme_mod('charity_nonprofit_twp_navigation_type', $charity_nonprofit_default['charity_nonprofit_twp_navigation_type']);
        }

        if( $charity_nonprofit_twp_navigation_type != 'no-navigation' && 'post' === get_post_type() ){

            if( $charity_nonprofit_twp_navigation_type == 'theme-normal-navigation' ){ ?>

                <div class="navigation-wrapper">
                    <?php
                    // Previous/next post navigation.
                    the_post_navigation(array(
                        'prev_text' => '<span class="arrow" aria-hidden="true">' . charity_nonprofit_the_theme_svg('arrow-left',$charity_nonprofit_return = true ) . '</span><span class="screen-reader-text">' . esc_html__('Previous post:', 'charity-nonprofit') . '</span><span class="post-title">%title</span>',
                        'next_text' => '<span class="arrow" aria-hidden="true">' . charity_nonprofit_the_theme_svg('arrow-right',$charity_nonprofit_return = true ) . '</span><span class="screen-reader-text">' . esc_html__('Next post:', 'charity-nonprofit') . '</span><span class="post-title">%title</span>',
                    )); ?>
                </div>
                <?php

            }else{

                $charity_nonprofit_next_post = get_next_post();
                if( isset( $charity_nonprofit_next_post->ID ) ){

                    $charity_nonprofit_next_post_id = $charity_nonprofit_next_post->ID;
                    echo '<div loop-count="1" next-post="' . absint( $charity_nonprofit_next_post_id ) . '" class="twp-single-infinity"></div>';

                }
            }

        }

    }

endif;

add_action( 'charity_nonprofit_navigation_action','charity_nonprofit_single_post_navigation',30 );

if( !function_exists('charity_nonprofit_content_offcanvas') ):

    // Offcanvas Contents
    function charity_nonprofit_content_offcanvas(){ ?>

        <div id="offcanvas-menu">
            <div class="offcanvas-wraper">
                <div class="close-offcanvas-menu">
                    <div class="offcanvas-close">
                        <a href="javascript:void(0)" class="skip-link-menu-start"></a>
                        <button type="button" class="button-offcanvas-close">
                            <span class="offcanvas-close-label">
                                <?php echo esc_html('Close', 'charity-nonprofit'); ?>
                            </span>
                        </button>
                    </div>
                </div>
                <div id="primary-nav-offcanvas" class="offcanvas-item offcanvas-main-navigation">
                    <nav class="primary-menu-wrapper" aria-label="<?php esc_attr_e('Horizontal', 'charity-nonprofit'); ?>" role="navigation">
                        <ul class="primary-menu theme-menu">
                            <?php
                            if (has_nav_menu('charity-nonprofit-primary-menu')) {
                                wp_nav_menu(
                                    array(
                                        'container' => '',
                                        'items_wrap' => '%3$s',
                                        'theme_location' => 'charity-nonprofit-primary-menu',
                                        'show_toggles' => true,
                                    )
                                );
                            }else{

                                wp_list_pages(
                                    array(
                                        'match_menu_classes' => true,
                                        'show_sub_menu_icons' => true,
                                        'title_li' => false,
                                        'show_toggles' => true,
                                        'walker' => new Charity_Nonprofit_Walker_Page(),
                                    )
                                );
                            }
                            ?>
                        </ul>
                    </nav><!-- .primary-menu-wrapper -->
                </div>
                <a href="javascript:void(0)" class="skip-link-menu-end"></a>
            </div>
        </div>

    <?php
    }

endif;

add_action( 'charity_nonprofit_before_footer_content_action','charity_nonprofit_content_offcanvas',30 );

if( !function_exists('charity_nonprofit_footer_content_widget') ):

    function charity_nonprofit_footer_content_widget(){
        
        $charity_nonprofit_default = charity_nonprofit_get_default_theme_options();
        
        $charity_nonprofit_footer_column_layout = absint(get_theme_mod('charity_nonprofit_footer_column_layout', $charity_nonprofit_default['charity_nonprofit_footer_column_layout']));
        $charity_nonprofit_footer_sidebar_class = 12;
        
        if($charity_nonprofit_footer_column_layout == 2) {
            $charity_nonprofit_footer_sidebar_class = 6;
        }
        
        if($charity_nonprofit_footer_column_layout == 3) {
            $charity_nonprofit_footer_sidebar_class = 4;
        }
        ?>
        
        <?php if ( get_theme_mod('charity_nonprofit_display_footer', true) == true ) : ?>
            <div class="footer-widgetarea">
                <div class="wrapper">
                    <div class="column-row">
                    
                        <?php for ($i = 0; $i < $charity_nonprofit_footer_column_layout; $i++) : ?>
                            
                            <div class="column <?php echo 'column-' . absint($charity_nonprofit_footer_sidebar_class); ?> column-sm-12">
                                
                                <?php 
                                // If no widgets are assigned, display default widgets
                                if ( ! is_active_sidebar( 'charity-nonprofit-footer-widget-' . $i ) ) : 

                                    if ($i === 0) : ?>
                                        <div id="media_image-3" class="widget widget_media_image">
                                            <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/logo.png'); ?>" alt="<?php echo esc_attr__( 'Footer Image', 'charity-nonprofit' ); ?>" style="max-width: 100%; height: auto;">
                                        </div>
                                        <div id="text-3" class="widget widget_text">
                                            <div class="textwidget">
                                                <p class="widget_text">
                                                    <?php esc_html_e('The Charity Nonprofit WordPress Theme is a powerful, multipurpose template designed specifically for nonprofit organizations looking to amplify their mission and engage communities. Crafted with modern design and robust functionality, this theme is ideal for nonprofit management, fundraising, and event organization. Whether you are building a nonprofit website, hosting a nonprofit blog, or launching nonprofit marketing campaigns, this theme provides an elegant platform to showcase nonprofit success stories, promote nonprofit initiatives, and drive nonprofit donations.', 'charity-nonprofit'); ?>
                                                </p>
                                            </div>
                                        </div>

                                    <?php elseif ($i === 1) : ?>
                                        <div id="pages-2" class="widget widget_pages">
                                            <h2 class="widget-title"><?php esc_html_e('Calendar', 'charity-nonprofit'); ?></h2>
                                            <?php get_calendar(); ?>
                                        </div>

                                    <?php elseif ($i === 2) : ?>
                                        <div id="search-2" class="widget widget_search">
                                            <h2 class="widget-title"><?php esc_html_e('Enter Keywords Here', 'charity-nonprofit'); ?></h2>
                                            <?php get_search_form(); ?>
                                        </div>
                                    <?php endif; 
                                    
                                else :
                                    // Display dynamic sidebar widget if assigned
                                    dynamic_sidebar('charity-nonprofit-footer-widget-' . $i);
                                endif;
                                ?>
                                
                            </div>
                            
                        <?php endfor; ?>

                    </div>
                </div>
            </div>
        <?php endif; ?> 

    <?php
    }

endif;

add_action( 'charity_nonprofit_footer_content_action', 'charity_nonprofit_footer_content_widget', 10 );

if( !function_exists('charity_nonprofit_footer_content_info') ):

    /**
     * Footer Copyright Area
    **/
    function charity_nonprofit_footer_content_info(){

        $charity_nonprofit_default = charity_nonprofit_get_default_theme_options(); ?>
        <div class="site-info">
            <div class="wrapper">
                <div class="column-row">
                    <div class="column column-9">
                        <div class="footer-credits">
                            <div class="footer-copyright">
                                <?php
                                    $charity_nonprofit_footer_copyright_text = wp_kses_post( get_theme_mod( 'charity_nonprofit_footer_copyright_text', $charity_nonprofit_default['charity_nonprofit_footer_copyright_text'] ) );
                                    echo esc_html( $charity_nonprofit_footer_copyright_text );
                                    echo '<br>';
                                    echo esc_html__('Theme: ', 'charity-nonprofit') . '<a href="' . esc_url('https://www.omegathemes.com/products/free-ngo-wordpress-theme') . '" title="' . esc_attr__('Charity Nonprofit ', 'charity-nonprofit') . '" target="_blank"><span>' . esc_html__('Charity Nonprofit ', 'charity-nonprofit') . '</span></a>' . esc_html__(' By ', 'charity-nonprofit') . '  <span>' . esc_html__('OMEGA ', 'charity-nonprofit') . '</span>';
                                    echo esc_html__('Powered by ', 'charity-nonprofit') . '<a href="' . esc_url('https://wordpress.org') . '" title="' . esc_attr__('WordPress', 'charity-nonprofit') . '" target="_blank"><span>' . esc_html__('WordPress.', 'charity-nonprofit') . '</span></a>';
                                ?>
                            </div>
                        </div>
                    </div>
                    <div class="column column-3 align-text-right">
                        <a class="to-the-top" href="#site-header">
                            <span class="to-the-top-long">
                                <?php if ( get_theme_mod('charity_nonprofit_enable_to_the_top', true) == true ) : ?>
                                    <?php
                                    $charity_nonprofit_to_the_top_text = get_theme_mod( 'charity_nonprofit_to_the_top_text', __( 'To the Top', 'charity-nonprofit' ) );
                                    printf( 
                                        wp_kses( 
                                            /* translators: %s is the arrow icon markup */
                                            '%s %s', 
                                            array( 'span' => array( 'class' => array(), 'aria-hidden' => array() ) ) 
                                        ), 
                                        esc_html( $charity_nonprofit_to_the_top_text ),
                                        '<span class="arrow" aria-hidden="true">&uarr;</span>' 
                                    );
                                    ?>
                                <?php endif; ?>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    <?php
    }

endif;

add_action( 'charity_nonprofit_footer_content_action','charity_nonprofit_footer_content_info',20 );


if( !function_exists( 'charity_nonprofit_main_slider' ) ) :

    function charity_nonprofit_main_slider() {
        $output = '';
        $charity_nonprofit_defaults = charity_nonprofit_get_default_theme_options();
        $charity_nonprofit_header_slider = get_theme_mod( 'charity_nonprofit_header_slider', $charity_nonprofit_defaults['charity_nonprofit_header_slider'] );

        $charity_nonprofit_slider_section_short_title = esc_html( get_theme_mod( 'charity_nonprofit_slider_section_short_title',
        $charity_nonprofit_defaults['charity_nonprofit_slider_section_short_title'] ) );

        // Debugging header slider status
        if ( ! $charity_nonprofit_header_slider ) {
            error_log('Header slider is not enabled or has a falsy value.');
            return '';  // Exit early if no slider
        }

        $charity_nonprofit_header_banner_cat = get_theme_mod( 'charity_nonprofit_header_banner_cat' );

        $banner_query = new WP_Query( array(
            'post_type' => 'post',
            'posts_per_page' => 4,
            'post__not_in' => get_option( 'sticky_posts' ),
            'category_name' => esc_html( $charity_nonprofit_header_banner_cat ),
        ) );

        // Check if the query has posts
        if ( ! $banner_query->have_posts() ) {
            error_log('No posts found for the banner query.');
            return '';  // Exit early if no posts
        }

        ob_start();  // Start output buffering
        ?>
        <div id="site-content" class="main-banner">
            <div class="slider-box">
                <div class="main-slider">
                    <div class="swiper-container theme-main-carousel" <?php echo is_rtl() ? 'dir="rtl"' : ''; ?>>
                        <div class="swiper-wrapper">
                            <?php while ( $banner_query->have_posts() ) : $banner_query->the_post();
                                $charity_nonprofit_featured_image = wp_get_attachment_image_src( get_post_thumbnail_id(), 'large' )[0] ?? get_template_directory_uri() . '/inc/homepage-setup/assets/homepage-setup-images/slider-img1.png';
                                ?>
                                <div class="swiper-slide main-carousel-item">
                                    <div class="wrapper">
                                        <div class="slider-main">
                                            <div class="slide-heading-main">
                                                <div class="main-carousel-caption">
                                                    <div class="post-content">
                                                        <header class="entry-header">
                                                            <?php if( $charity_nonprofit_slider_section_short_title ){ ?>
                                                                <h6 class="slider-short"><?php echo esc_html( $charity_nonprofit_slider_section_short_title ); ?></h6>
                                                            <?php } ?>
                                                            <h2 class="slider-heading">
                                                                <a href="<?php the_permalink(); ?>" rel="bookmark"><span><?php echo esc_html( get_the_title() ); ?></span></a>
                                                            </h2>
                                                        </header>
                                                        <div class="slide-btn">
                                                            <a href="<?php the_permalink(); ?>" class="btn-fancy btn-fancy-primary">
                                                                <?php echo esc_html__( 'Know More', 'charity-nonprofit' ); ?>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="slider-image">
                                                <div class="data-bg banner-img" data-background="<?php echo esc_url( $charity_nonprofit_featured_image ); ?>">
                                                    <a href="<?php the_permalink(); ?>" class="theme-image-responsive"></a>
                                                </div>
                                                <?php charity_nonprofit_post_format_icon(); ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <?php endwhile; ?>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
        <?php
        wp_reset_postdata();
        $output = ob_get_clean(); // Get buffered output and clean buffer
        return $output; // Return the output instead of echoing
    }

endif;

if( !function_exists( 'charity_nonprofit_about_section' ) ) :

    function charity_nonprofit_about_section(){

        $charity_nonprofit_defaults = charity_nonprofit_get_default_theme_options();

        $charity_nonprofit_about_us_section_short_title = esc_html( get_theme_mod( 'charity_nonprofit_about_us_section_short_title',
        $charity_nonprofit_defaults['charity_nonprofit_about_us_section_short_title'] ) );

        $charity_nonprofit_about_us_section_title = esc_html( get_theme_mod( 'charity_nonprofit_about_us_section_title',
        $charity_nonprofit_defaults['charity_nonprofit_about_us_section_title'] ) );

        $charity_nonprofit_team_section_subtitle = esc_html( get_theme_mod( 'charity_nonprofit_team_section_subtitle',
        $charity_nonprofit_defaults['charity_nonprofit_team_section_subtitle'] ) );

        $charity_nonprofit_about_us_list_text_1 = esc_html( get_theme_mod( 'charity_nonprofit_about_us_list_text_1',
        $charity_nonprofit_defaults['charity_nonprofit_about_us_list_text_1'] ) );

        $charity_nonprofit_about_us_list_text_2 = esc_html( get_theme_mod( 'charity_nonprofit_about_us_list_text_2',
        $charity_nonprofit_defaults['charity_nonprofit_about_us_list_text_2'] ) );

        $charity_nonprofit_about_us_list_text_3 = esc_html( get_theme_mod( 'charity_nonprofit_about_us_list_text_3',
        $charity_nonprofit_defaults['charity_nonprofit_about_us_list_text_3'] ) );

        $charity_nonprofit_about_us_list_text_4 = esc_html( get_theme_mod( 'charity_nonprofit_about_us_list_text_4',
        $charity_nonprofit_defaults['charity_nonprofit_about_us_list_text_4'] ) );

        $charity_nonprofit_about_us_list_text_5 = esc_html( get_theme_mod( 'charity_nonprofit_about_us_list_text_5',
        $charity_nonprofit_defaults['charity_nonprofit_about_us_list_text_5'] ) );

        $charity_nonprofit_about_us_list_text_6 = esc_html( get_theme_mod( 'charity_nonprofit_about_us_list_text_6',
        $charity_nonprofit_defaults['charity_nonprofit_about_us_list_text_6'] ) );

        $charity_nonprofit_team_section_button_text = esc_html( get_theme_mod( 'charity_nonprofit_team_section_button_text',
        $charity_nonprofit_defaults['charity_nonprofit_team_section_button_text'] ) );

        $charity_nonprofit_team_section_button_url = esc_url( get_theme_mod( 'charity_nonprofit_team_section_button_url',
        $charity_nonprofit_defaults['charity_nonprofit_team_section_button_url'] ) );

        $charity_nonprofit_about_us_image_1 = esc_url( get_theme_mod( 'charity_nonprofit_about_us_image_1',
        $charity_nonprofit_defaults['charity_nonprofit_about_us_image_1'] ) );

        $charity_nonprofit_about_us_image_2 = esc_url( get_theme_mod( 'charity_nonprofit_about_us_image_2',
        $charity_nonprofit_defaults['charity_nonprofit_about_us_image_2'] ) ); ?>
            <div class="theme-product-block">
                <div class="wrapper">
                    <div class="services-box">
                        <div class="about-us-right">
                            <div class="image-box-1">
                                <?php if( $charity_nonprofit_about_us_image_1 ){ ?>
                                    <img class="team-images" src="<?php echo esc_url( $charity_nonprofit_about_us_image_1 ); ?>">
                                <?php } ?>
                                <?php if( $charity_nonprofit_about_us_image_2 ){ ?>
                                    <img class="about-us-2" src="<?php echo esc_url( $charity_nonprofit_about_us_image_2 ); ?>">
                                <?php } ?>
                            </div>
                        </div>
                        <div class="about-us-left">
                            <div class="package-content">
                                <?php if( $charity_nonprofit_about_us_section_short_title ){ ?>
                                    <h6><?php echo esc_html( $charity_nonprofit_about_us_section_short_title ); ?></h6>
                                <?php } ?>
                                <?php if( $charity_nonprofit_about_us_section_title ){ ?>
                                    <h4><?php echo esc_html( $charity_nonprofit_about_us_section_title ); ?></h4>
                                <?php } ?>
                                <?php if( $charity_nonprofit_team_section_subtitle ){ ?>
                                    <p><?php echo esc_html( $charity_nonprofit_team_section_subtitle ); ?></p>
                                <?php } ?>
                                <ul class="about-list">
                                    <li><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm-204.7-98.1l184-184c6.2-6.2 6.2-16.4 0-22.6l-22.6-22.6c-6.2-6.2-16.4-6.2-22.6 0L184 302.7l-70.1-70.1c-6.2-6.2-16.4-6.2-22.6 0l-22.6 22.6c-6.2 6.2-6.2 16.4 0 22.6l104 104c6.2 6.3 16.4 6.3 22.6 0z"/></svg><?php echo esc_html( $charity_nonprofit_about_us_list_text_1 ); ?></li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm-204.7-98.1l184-184c6.2-6.2 6.2-16.4 0-22.6l-22.6-22.6c-6.2-6.2-16.4-6.2-22.6 0L184 302.7l-70.1-70.1c-6.2-6.2-16.4-6.2-22.6 0l-22.6 22.6c-6.2 6.2-6.2 16.4 0 22.6l104 104c6.2 6.3 16.4 6.3 22.6 0z"/></svg><?php echo esc_html( $charity_nonprofit_about_us_list_text_2 ); ?></li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm-204.7-98.1l184-184c6.2-6.2 6.2-16.4 0-22.6l-22.6-22.6c-6.2-6.2-16.4-6.2-22.6 0L184 302.7l-70.1-70.1c-6.2-6.2-16.4-6.2-22.6 0l-22.6 22.6c-6.2 6.2-6.2 16.4 0 22.6l104 104c6.2 6.3 16.4 6.3 22.6 0z"/></svg><?php echo esc_html( $charity_nonprofit_about_us_list_text_3); ?></li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm-204.7-98.1l184-184c6.2-6.2 6.2-16.4 0-22.6l-22.6-22.6c-6.2-6.2-16.4-6.2-22.6 0L184 302.7l-70.1-70.1c-6.2-6.2-16.4-6.2-22.6 0l-22.6 22.6c-6.2 6.2-6.2 16.4 0 22.6l104 104c6.2 6.3 16.4 6.3 22.6 0z"/></svg><?php echo esc_html( $charity_nonprofit_about_us_list_text_4); ?></li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm-204.7-98.1l184-184c6.2-6.2 6.2-16.4 0-22.6l-22.6-22.6c-6.2-6.2-16.4-6.2-22.6 0L184 302.7l-70.1-70.1c-6.2-6.2-16.4-6.2-22.6 0l-22.6 22.6c-6.2 6.2-6.2 16.4 0 22.6l104 104c6.2 6.3 16.4 6.3 22.6 0z"/></svg><?php echo esc_html( $charity_nonprofit_about_us_list_text_5); ?></li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm-204.7-98.1l184-184c6.2-6.2 6.2-16.4 0-22.6l-22.6-22.6c-6.2-6.2-16.4-6.2-22.6 0L184 302.7l-70.1-70.1c-6.2-6.2-16.4-6.2-22.6 0l-22.6 22.6c-6.2 6.2-6.2 16.4 0 22.6l104 104c6.2 6.3 16.4 6.3 22.6 0z"/></svg><?php echo esc_html( $charity_nonprofit_about_us_list_text_6); ?></li>
                                </ul>
                            </div>
                            <div class="package-button">
                                <a class="package-btn" href="<?php echo esc_url( $charity_nonprofit_team_section_button_url ); ?>"><?php echo esc_html( $charity_nonprofit_team_section_button_text ); ?></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    <?php }

endif;


if (!function_exists('charity_nonprofit_post_format_icon')):

    // Post Format Icon.
    function charity_nonprofit_post_format_icon() {

        $charity_nonprofit_format = get_post_format(get_the_ID()) ?: 'standard';
        $charity_nonprofit_icon = '';
        $charity_nonprofit_title = '';
        if( $charity_nonprofit_format == 'video' ){
            $charity_nonprofit_icon = charity_nonprofit_get_theme_svg( 'video' );
            $charity_nonprofit_title = esc_html__('Video','charity-nonprofit');
        }elseif( $charity_nonprofit_format == 'audio' ){
            $charity_nonprofit_icon = charity_nonprofit_get_theme_svg( 'audio' );
            $charity_nonprofit_title = esc_html__('Audio','charity-nonprofit');
        }elseif( $charity_nonprofit_format == 'gallery' ){
            $charity_nonprofit_icon = charity_nonprofit_get_theme_svg( 'gallery' );
            $charity_nonprofit_title = esc_html__('Gallery','charity-nonprofit');
        }elseif( $charity_nonprofit_format == 'quote' ){
            $charity_nonprofit_icon = charity_nonprofit_get_theme_svg( 'quote' );
            $charity_nonprofit_title = esc_html__('Quote','charity-nonprofit');
        }elseif( $charity_nonprofit_format == 'image' ){
            $charity_nonprofit_icon = charity_nonprofit_get_theme_svg( 'image' );
            $charity_nonprofit_title = esc_html__('Image','charity-nonprofit');
        } elseif( $charity_nonprofit_format == 'link' ){
            $charity_nonprofit_icon = charity_nonprofit_get_theme_svg( 'link' );
            $charity_nonprofit_title = esc_html__('Link','charity-nonprofit');
        } elseif( $charity_nonprofit_format == 'status' ){
            $charity_nonprofit_icon = charity_nonprofit_get_theme_svg( 'status' );
            $charity_nonprofit_title = esc_html__('Status','charity-nonprofit');
        } elseif( $charity_nonprofit_format == 'aside' ){
            $charity_nonprofit_icon = charity_nonprofit_get_theme_svg( 'aside' );
            $charity_nonprofit_title = esc_html__('Aside','charity-nonprofit');
        } elseif( $charity_nonprofit_format == 'chat' ){
            $charity_nonprofit_icon = charity_nonprofit_get_theme_svg( 'chat' );
            $charity_nonprofit_title = esc_html__('Chat','charity-nonprofit');
        }
        
        if (!empty($charity_nonprofit_icon)) { ?>
            <div class="theme-post-format">
                <span class="post-format-icom"><?php echo charity_nonprofit_svg_escape($charity_nonprofit_icon); ?></span>
                <?php if( $charity_nonprofit_title ){ echo '<span class="post-format-label">'.esc_html( $charity_nonprofit_title ).'</span>'; } ?>
            </div>
        <?php }
    }

endif;

if ( ! function_exists( 'charity_nonprofit_svg_escape' ) ):

    /**
     * Get information about the SVG icon.
     *
     * @param string $charity_nonprofit_svg_name The name of the icon.
     * @param string $group The group the icon belongs to.
     * @param string $color Color code.
     */
    function charity_nonprofit_svg_escape( $charity_nonprofit_input ) {

        // Make sure that only our allowed tags and attributes are included.
        $charity_nonprofit_svg = wp_kses(
            $charity_nonprofit_input,
            array(
                'svg'     => array(
                    'class'       => true,
                    'xmlns'       => true,
                    'width'       => true,
                    'height'      => true,
                    'viewbox'     => true,
                    'aria-hidden' => true,
                    'role'        => true,
                    'focusable'   => true,
                ),
                'path'    => array(
                    'fill'      => true,
                    'fill-rule' => true,
                    'd'         => true,
                    'transform' => true,
                ),
                'polygon' => array(
                    'fill'      => true,
                    'fill-rule' => true,
                    'points'    => true,
                    'transform' => true,
                    'focusable' => true,
                ),
            )
        );

        if ( ! $charity_nonprofit_svg ) {
            return false;
        }

        return $charity_nonprofit_svg;

    }

endif;

if( !function_exists( 'charity_nonprofit_sanitize_sidebar_option_meta' ) ) :

    // Sidebar Option Sanitize.
    function charity_nonprofit_sanitize_sidebar_option_meta( $charity_nonprofit_input ){

        $charity_nonprofit_metabox_options = array( 'global-sidebar','left-sidebar','right-sidebar','no-sidebar' );
        if( in_array( $charity_nonprofit_input,$charity_nonprofit_metabox_options ) ){

            return $charity_nonprofit_input;

        }else{

            return '';

        }
    }

endif;

if( !function_exists( 'charity_nonprofit_sanitize_pagination_meta' ) ) :

    // Sidebar Option Sanitize.
    function charity_nonprofit_sanitize_pagination_meta( $charity_nonprofit_input ){

        $charity_nonprofit_metabox_options = array( 'Center','Right','Left');
        if( in_array( $charity_nonprofit_input,$charity_nonprofit_metabox_options ) ){

            return $charity_nonprofit_input;

        }else{

            return '';

        }
    }

endif;

if( !function_exists( 'charity_nonprofit_sanitize_menu_transform' ) ) :

    // Sidebar Option Sanitize.
    function charity_nonprofit_sanitize_menu_transform( $charity_nonprofit_input ){

        $charity_nonprofit_metabox_options = array( 'capitalize','uppercase','lowercase');
        if( in_array( $charity_nonprofit_input,$charity_nonprofit_metabox_options ) ){

            return $charity_nonprofit_input;

        }else{

            return '';

        }
    }

endif;

if( !function_exists( 'charity_nonprofit_sanitize_page_content_alignment' ) ) :

    // Sidebar Option Sanitize.
    function charity_nonprofit_sanitize_page_content_alignment( $charity_nonprofit_input ){

        $charity_nonprofit_metabox_options = array( 'left','center','right');
        if( in_array( $charity_nonprofit_input,$charity_nonprofit_metabox_options ) ){

            return $charity_nonprofit_input;

        }else{

            return '';

        }
    }

endif;

if( !function_exists( 'charity_nonprofit_sanitize_footer_widget_title_alignment' ) ) :

    // Footer Option Sanitize.
    function charity_nonprofit_sanitize_footer_widget_title_alignment( $charity_nonprofit_input ){

        $charity_nonprofit_metabox_options = array( 'left','center','right');
        if( in_array( $charity_nonprofit_input,$charity_nonprofit_metabox_options ) ){

            return $charity_nonprofit_input;

        }else{

            return '';

        }
    }

endif;

if( !function_exists( 'charity_nonprofit_sanitize_pagination_type' ) ) :

    /**
     * Sanitize the pagination type setting.
     *
     * @param string $charity_nonprofit_input The input value from the Customizer.
     * @return string The sanitized value.
     */
    function charity_nonprofit_sanitize_pagination_type( $charity_nonprofit_input ) {
        // Define valid options for the pagination type.
        $charity_nonprofit_valid_options = array( 'numeric', 'newer_older' ); // Update valid options to include 'newer_older'

        // If the input is one of the valid options, return it. Otherwise, return the default option ('numeric').
        if ( in_array( $charity_nonprofit_input, $charity_nonprofit_valid_options, true ) ) {
            return $charity_nonprofit_input;
        } else {
            // Return 'numeric' as the fallback if the input is invalid.
            return 'numeric';
        }
    }

endif;


// Sanitize the enable/disable setting for pagination
if( !function_exists('charity_nonprofit_sanitize_enable_pagination') ) :
    function charity_nonprofit_sanitize_enable_pagination( $charity_nonprofit_input ) {
        return (bool) $charity_nonprofit_input;
    }
endif;

if( !function_exists( 'charity_nonprofit_sanitize_copyright_alignment_meta' ) ) :

    // Sidebar Option Sanitize.
    function charity_nonprofit_sanitize_copyright_alignment_meta( $charity_nonprofit_input ){

        $charity_nonprofit_metabox_options = array( 'Default','Reverse','Center');
        if( in_array( $charity_nonprofit_input,$charity_nonprofit_metabox_options ) ){

            return $charity_nonprofit_input;

        }else{

            return '';

        }
    }

endif;

/**
 * Sidebar Layout Function
 */
function charity_nonprofit_get_final_sidebar_layout() {
	$charity_nonprofit_defaults       = charity_nonprofit_get_default_theme_options();
	$charity_nonprofit_global_layout  = get_theme_mod('charity_nonprofit_global_sidebar_layout', $charity_nonprofit_defaults['charity_nonprofit_global_sidebar_layout']);
	$charity_nonprofit_page_layout    = get_theme_mod('charity_nonprofit_page_sidebar_layout', $charity_nonprofit_global_layout);
	$charity_nonprofit_post_layout    = get_theme_mod('charity_nonprofit_post_sidebar_layout', $charity_nonprofit_global_layout);
	$charity_nonprofit_meta_layout    = get_post_meta(get_the_ID(), 'charity_nonprofit_post_sidebar_option', true);

	if (!empty($charity_nonprofit_meta_layout) && $charity_nonprofit_meta_layout !== 'default') {
		return $charity_nonprofit_meta_layout;
	}
	if (is_page() || (function_exists('is_shop') && is_shop())) {
		return $charity_nonprofit_page_layout;
	}
	if (is_single()) {
		return $charity_nonprofit_post_layout;
	}
	return $charity_nonprofit_global_layout;
}