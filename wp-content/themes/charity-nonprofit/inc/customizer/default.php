<?php
/**
 * Default Values.
 *
 * @package Charity Nonprofit
 */

if ( ! function_exists( 'charity_nonprofit_get_default_theme_options' ) ) :
	function charity_nonprofit_get_default_theme_options() {

		$charity_nonprofit_defaults = array();

        // Header
        $charity_nonprofit_defaults['charity_nonprofit_header_section_button_text']         =  esc_html__( 'Donate Now', 'charity-nonprofit' );
        $charity_nonprofit_defaults['charity_nonprofit_header_section_button_url']          =  esc_url( '#', 'charity-nonprofit' );
        $charity_nonprofit_defaults['charity_nonprofit_header_search']                    = 1;
        $charity_nonprofit_defaults['charity_nonprofit_theme_loader']                     = 0;
        $charity_nonprofit_defaults['charity_nonprofit_footer_column_layout']             = 3;
        $charity_nonprofit_defaults['charity_nonprofit_menu_font_size']                 = 14;
        $charity_nonprofit_defaults['charity_nonprofit_copyright_font_size']                 = 16;
        $charity_nonprofit_defaults['charity_nonprofit_breadcrumb_font_size']                 = 16;
        $charity_nonprofit_defaults['charity_nonprofit_excerpt_limit']                 = 20;
        $charity_nonprofit_defaults['charity_nonprofit_menu_text_transform']                 = 'Capitalize';  
        $charity_nonprofit_defaults['charity_nonprofit_single_page_content_alignment']                 = 'left';
        $charity_nonprofit_defaults['charity_nonprofit_theme_pagination_options_alignment']                 = 'Center'; 
        $charity_nonprofit_defaults['charity_nonprofit_theme_breadcrumb_options_alignment']                 = 'Left';   
        $charity_nonprofit_defaults['charity_nonprofit_per_columns']                 = 3;  
        $charity_nonprofit_defaults['charity_nonprofit_product_per_page']                 = 9;
        $charity_nonprofit_defaults['charity_nonprofit_custom_related_products_number'] = 6;
        $charity_nonprofit_defaults['charity_nonprofit_custom_related_products_number_per_row'] = 3;
        $charity_nonprofit_defaults['charity_nonprofit_sticky']                                         = 0;
        $charity_nonprofit_defaults['charity_nonprofit_theme_breadcrumb_enable']                 = 1;
        $charity_nonprofit_defaults['charity_nonprofit_single_post_content_alignment']                 = 'left';

        //Slider 

        $charity_nonprofit_defaults['charity_nonprofit_slider_section_sub_title']         =  esc_html__( 'Sweet Crumbs!', 'charity-nonprofit' );
        $charity_nonprofit_defaults['charity_nonprofit_slider_section_content']           =  esc_html__( 'Welcome to Sweet Crumbs Bakery! We specialize in fresh, handcrafted treats, from artisan breads to delightful cakes and pastries. Using the finest ingredients, we bring warmth and flavor to every bite. Discover your next favorite indulgence with us!', 'charity-nonprofit' );
        $charity_nonprofit_defaults['charity_nonprofit_slider_section_button_url']        =  esc_url( '#', 'charity-nonprofit' );
        $charity_nonprofit_defaults['charity_nonprofit_slider_section_button']            =  esc_html__( 'Shop Now', 'charity-nonprofit' );

	// Options.
        $charity_nonprofit_defaults['charity_nonprofit_logo_width_range']                 = 200;

        $charity_nonprofit_defaults['charity_nonprofit_enable_to_the_top']                      = 1;
        $charity_nonprofit_defaults['charity_nonprofit_to_the_top_text']                      = esc_html__( 'To The Top', 'charity-nonprofit' );
        
        $charity_nonprofit_defaults['charity_nonprofit_global_sidebar_layout']	    = 'right-sidebar';
        
        $charity_nonprofit_defaults['charity_nonprofit_pagination_layout']                = 'numeric';
	$charity_nonprofit_defaults['charity_nonprofit_footer_copyright_text'] 	    = esc_html__( 'All rights reserved.', 'charity-nonprofit' );
        $charity_nonprofit_defaults['charity_nonprofit_twp_navigation_type']              = 'theme-normal-navigation';
        $charity_nonprofit_defaults['charity_nonprofit_post_author']                      = 1;
        $charity_nonprofit_defaults['charity_nonprofit_post_date']                        = 1;
        $charity_nonprofit_defaults['charity_nonprofit_post_category']                    = 1;
        $charity_nonprofit_defaults['charity_nonprofit_post_tags']                        = 1;
        $charity_nonprofit_defaults['charity_nonprofit_floating_next_previous_nav']       = 1;
        $charity_nonprofit_defaults['charity_nonprofit_header_slider']                    = 1;
        $charity_nonprofit_defaults['charity_nonprofit_background_color']                 = '#fff';
        $charity_nonprofit_defaults['charity_nonprofit_footer_widget_title_alignment']                  = 'left'; 
        $charity_nonprofit_defaults['charity_nonprofit_show_hide_related_product']                      = 1;
        $charity_nonprofit_defaults['charity_nonprofit_display_footer']                                 = 1;
        $charity_nonprofit_defaults['charity_nonprofit_global_color']                                   = '#FD8457';
        $charity_nonprofit_defaults['charity_nonprofit_display_archive_post_category']          = 1;
        $charity_nonprofit_defaults['charity_nonprofit_display_archive_post_title']             = 1;
        $charity_nonprofit_defaults['charity_nonprofit_display_archive_post_content']           = 1;
        $charity_nonprofit_defaults['charity_nonprofit_display_archive_post_button']            = 1;
        
        $charity_nonprofit_defaults['charity_nonprofit_display_single_post_image']              = 1;
        $charity_nonprofit_defaults['charity_nonprofit_display_archive_post_format_icon']       = 1;

        //Slider
        $charity_nonprofit_defaults['charity_nonprofit_slider_section_short_title']             = esc_html__( 'Helping around the world ', 'charity-nonprofit' );

        //Product  
        
        $charity_nonprofit_defaults['charity_nonprofit_about_section']                          = 1;
        $charity_nonprofit_defaults['charity_nonprofit_about_us_image_1']                       = esc_url(get_template_directory_uri() . '/assets/images/about1.png');
        $charity_nonprofit_defaults['charity_nonprofit_about_us_image_2']                       = esc_url(get_template_directory_uri() . '/assets/images/about2.png');

        $charity_nonprofit_defaults['charity_nonprofit_about_us_section_short_title']           = esc_html__( 'GET TO KNOW ABOUT US ', 'charity-nonprofit' );
        $charity_nonprofit_defaults['charity_nonprofit_about_us_section_title']                 = esc_html__( 'We Are In A Mission Need To Help.', 'charity-nonprofit' );
        $charity_nonprofit_defaults['charity_nonprofit_team_section_subtitle']                  = esc_html__( 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'charity-nonprofit' );

        $charity_nonprofit_defaults['charity_nonprofit_about_us_list_text_1']                   = esc_html__( 'food services are provided.', 'charity-nonprofit' );
        $charity_nonprofit_defaults['charity_nonprofit_about_us_list_text_2']                   = esc_html__( 'Water services are available.', 'charity-nonprofit' );
        $charity_nonprofit_defaults['charity_nonprofit_about_us_list_text_3']                   = esc_html__( 'Environment services are offered.', 'charity-nonprofit' );
        $charity_nonprofit_defaults['charity_nonprofit_about_us_list_text_4']                   = esc_html__( 'Medical and instrumental support are available.', 'charity-nonprofit' );
        $charity_nonprofit_defaults['charity_nonprofit_about_us_list_text_5']                   = esc_html__( 'Build and repair services are assisted.', 'charity-nonprofit' );
        $charity_nonprofit_defaults['charity_nonprofit_about_us_list_text_6']                   = esc_html__( 'Education services are available.', 'charity-nonprofit' );
        
        $charity_nonprofit_defaults['charity_nonprofit_team_section_button_text']               = esc_html__( 'Know More', 'charity-nonprofit' );
        $charity_nonprofit_defaults['charity_nonprofit_team_section_button_url']                = esc_url( '#', 'charity-nonprofit' );

        $charity_nonprofit_defaults['charity_nonprofit_footer_widget_title_alignment']          = 'left'; 
        $charity_nonprofit_defaults['charity_nonprofit_show_hide_related_product']              = 1;
        $charity_nonprofit_defaults['charity_nonprofit_display_archive_post_image']             = 1;
        $charity_nonprofit_defaults['charity_nonprofit_product_section_heading']                = esc_html__( 'Breads', 'charity-nonprofit' );

        // 404 Page Defaults
        $charity_nonprofit_defaults['charity_nonprofit_404_main_title'] = esc_html__( 'Oops! That page can’t be found.', 'charity-nonprofit' );
        $charity_nonprofit_defaults['charity_nonprofit_404_subtitle_one'] = esc_html__( 'Maybe it’s out there, somewhere...', 'charity-nonprofit' );
        $charity_nonprofit_defaults['charity_nonprofit_404_para_one'] = esc_html__( 'You can always find insightful stories on our', 'charity-nonprofit' );
        $charity_nonprofit_defaults['charity_nonprofit_404_subtitle_two'] = esc_html__( 'Still feeling lost? You’re not alone.', 'charity-nonprofit' );
        $charity_nonprofit_defaults['charity_nonprofit_404_para_two'] = esc_html__( 'Enjoy these stories about getting lost, losing things, and finding what you never knew you were looking for.', 'charity-nonprofit' );

	// Pass through filter.
	$charity_nonprofit_defaults = apply_filters( 'charity_nonprofit_filter_default_theme_options', $charity_nonprofit_defaults );

		return $charity_nonprofit_defaults;
	}
endif;