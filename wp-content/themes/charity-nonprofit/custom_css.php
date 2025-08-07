<?php

$charity_nonprofit_custom_css = "";

	$charity_nonprofit_theme_pagination_options_alignment = get_theme_mod('charity_nonprofit_theme_pagination_options_alignment', 'Center');
	if ($charity_nonprofit_theme_pagination_options_alignment == 'Center') {
		$charity_nonprofit_custom_css .= '.navigation.pagination,.navigation.posts-navigation .nav-links{';
		$charity_nonprofit_custom_css .= 'justify-content: center;margin: 0 auto;';
		$charity_nonprofit_custom_css .= '}';
	} else if ($charity_nonprofit_theme_pagination_options_alignment == 'Right') {
		$charity_nonprofit_custom_css .= '.navigation.pagination,.navigation.posts-navigation .nav-links{';
		$charity_nonprofit_custom_css .= 'justify-content: right;margin: 0 0 0 auto;';
		$charity_nonprofit_custom_css .= '}';
	} else if ($charity_nonprofit_theme_pagination_options_alignment == 'Left') {
		$charity_nonprofit_custom_css .= '.navigation.pagination,.navigation.posts-navigation .nav-links{';
		$charity_nonprofit_custom_css .= 'justify-content: left;margin: 0 auto 0 0;';
		$charity_nonprofit_custom_css .= '}';
	}

	$charity_nonprofit_theme_breadcrumb_enable = get_theme_mod('charity_nonprofit_theme_breadcrumb_enable',true);
    if($charity_nonprofit_theme_breadcrumb_enable != true){
        $charity_nonprofit_custom_css .='nav.breadcrumb-trail.breadcrumbs,nav.woocommerce-breadcrumb{';
            $charity_nonprofit_custom_css .='display: none;';
        $charity_nonprofit_custom_css .='}';
    }

	$charity_nonprofit_theme_breadcrumb_options_alignment = get_theme_mod('charity_nonprofit_theme_breadcrumb_options_alignment', 'Left');
	if ($charity_nonprofit_theme_breadcrumb_options_alignment == 'Center') {
	    $charity_nonprofit_custom_css .= '.breadcrumbs ul,nav.woocommerce-breadcrumb{';
	    $charity_nonprofit_custom_css .= 'text-align: center !important;';
	    $charity_nonprofit_custom_css .= '}';
	} else if ($charity_nonprofit_theme_breadcrumb_options_alignment == 'Right') {
	    $charity_nonprofit_custom_css .= '.breadcrumbs ul,nav.woocommerce-breadcrumb{';
	    $charity_nonprofit_custom_css .= 'text-align: Right !important;';
	    $charity_nonprofit_custom_css .= '}';
	} else if ($charity_nonprofit_theme_breadcrumb_options_alignment == 'Left') {
	    $charity_nonprofit_custom_css .= '.breadcrumbs ul,nav.woocommerce-breadcrumb{';
	    $charity_nonprofit_custom_css .= 'text-align: Left !important;';
	    $charity_nonprofit_custom_css .= '}';
	}

	$charity_nonprofit_single_page_content_alignment = get_theme_mod('charity_nonprofit_single_page_content_alignment', 'left');
	if ($charity_nonprofit_single_page_content_alignment == 'left') {
	    $charity_nonprofit_custom_css .= '#single-page .type-page,section.theme-custom-block.theme-error-sectiontheme-error-section.error-block-middle,section.theme-custom-block.theme-error-section.error-block-heading .theme-area-header{';
	    $charity_nonprofit_custom_css .= 'text-align: left !important;';
	    $charity_nonprofit_custom_css .= '}';
	} else if ($charity_nonprofit_single_page_content_alignment == 'center') {
	    $charity_nonprofit_custom_css .= '#single-page .type-page,section.theme-custom-block.theme-error-sectiontheme-error-section.error-block-middle,section.theme-custom-block.theme-error-section.error-block-heading .theme-area-header{';
	    $charity_nonprofit_custom_css .= 'text-align: center !important;';
	    $charity_nonprofit_custom_css .= '}';
	} else if ($charity_nonprofit_single_page_content_alignment == 'right') {
	    $charity_nonprofit_custom_css .= '#single-page .type-page,section.theme-custom-block.theme-error-sectiontheme-error-section.error-block-middle,section.theme-custom-block.theme-error-section.error-block-heading .theme-area-header{';
	    $charity_nonprofit_custom_css .= 'text-align: right !important;';
	    $charity_nonprofit_custom_css .= '}';
	}

	$charity_nonprofit_single_post_content_alignment = get_theme_mod('charity_nonprofit_single_post_content_alignment', 'left');
	if ($charity_nonprofit_single_post_content_alignment == 'left') {
	    $charity_nonprofit_custom_css .= '#single-page .type-post,#single-page .type-post .entry-meta,#single-page .type-post .is-layout-flex{';
	    $charity_nonprofit_custom_css .= 'text-align: left !important;justify-content: left;';
	    $charity_nonprofit_custom_css .= '}';
	} else if ($charity_nonprofit_single_post_content_alignment == 'center') {
	    $charity_nonprofit_custom_css .= '#single-page .type-post,#single-page .type-post .entry-meta,#single-page .type-post .is-layout-flex{';
	    $charity_nonprofit_custom_css .= 'text-align: center !important;justify-content: center;';
	    $charity_nonprofit_custom_css .= '}';
	} else if ($charity_nonprofit_single_post_content_alignment == 'right') {
	    $charity_nonprofit_custom_css .= '#single-page .type-post,#single-page .type-post .entry-meta,#single-page .type-post .is-layout-flex{';
	    $charity_nonprofit_custom_css .= 'text-align: right !important;justify-content: right;';
	    $charity_nonprofit_custom_css .= '}';
	}

	$charity_nonprofit_menu_text_transform = get_theme_mod('charity_nonprofit_menu_text_transform', 'Capitalize');
	if ($charity_nonprofit_menu_text_transform == 'Capitalize') {
	    $charity_nonprofit_custom_css .= '.site-navigation .primary-menu > li a{';
	    $charity_nonprofit_custom_css .= 'text-transform: Capitalize !important;';
	    $charity_nonprofit_custom_css .= '}';
	} else if ($charity_nonprofit_menu_text_transform == 'uppercase') {
	    $charity_nonprofit_custom_css .= '.site-navigation .primary-menu > li a{';
	    $charity_nonprofit_custom_css .= 'text-transform: uppercase !important;';
	    $charity_nonprofit_custom_css .= '}';
	} else if ($charity_nonprofit_menu_text_transform == 'lowercase') {
	    $charity_nonprofit_custom_css .= '.site-navigation .primary-menu > li a{';
	    $charity_nonprofit_custom_css .= 'text-transform: lowercase !important;';
	    $charity_nonprofit_custom_css .= '}';
	}

	$charity_nonprofit_footer_widget_title_alignment = get_theme_mod('charity_nonprofit_footer_widget_title_alignment', 'left');
	if ($charity_nonprofit_footer_widget_title_alignment == 'left') {
	    $charity_nonprofit_custom_css .= 'h2.widget-title{';
	    $charity_nonprofit_custom_css .= 'text-align: left !important;';
	    $charity_nonprofit_custom_css .= '}';
	} else if ($charity_nonprofit_footer_widget_title_alignment == 'center') {
	    $charity_nonprofit_custom_css .= 'h2.widget-title{';
	    $charity_nonprofit_custom_css .= 'text-align: center !important;';
	    $charity_nonprofit_custom_css .= '}';
	} else if ($charity_nonprofit_footer_widget_title_alignment == 'right') {
	    $charity_nonprofit_custom_css .= 'h2.widget-title{';
	    $charity_nonprofit_custom_css .= 'text-align: right !important;';
	    $charity_nonprofit_custom_css .= '}';
	}

    $charity_nonprofit_show_hide_related_product = get_theme_mod('charity_nonprofit_show_hide_related_product',true);
    if($charity_nonprofit_show_hide_related_product != true){
        $charity_nonprofit_custom_css .='.related.products{';
            $charity_nonprofit_custom_css .='display: none;';
        $charity_nonprofit_custom_css .='}';
    }

	/*-------------------- Global First Color -------------------*/

	$charity_nonprofit_global_color = get_theme_mod('charity_nonprofit_global_color', '#FD8457'); // Add a fallback if the color isn't set

	if ($charity_nonprofit_global_color) {
		$charity_nonprofit_custom_css .= ':root {';
		$charity_nonprofit_custom_css .= '--global-color: ' . esc_attr($charity_nonprofit_global_color) . ';';
		$charity_nonprofit_custom_css .= '}';
	}

	/*-------------------- Content Font -------------------*/

	$charity_nonprofit_content_typography_font = get_theme_mod('charity_nonprofit_content_typography_font', 'Lexend'); // Add a fallback if the color isn't set

	if ($charity_nonprofit_content_typography_font) {
		$charity_nonprofit_custom_css .= ':root {';
		$charity_nonprofit_custom_css .= '--font-main: ' . esc_attr($charity_nonprofit_content_typography_font) . ';';
		$charity_nonprofit_custom_css .= '}';
	}

	/*-------------------- Heading Font -------------------*/

	$charity_nonprofit_heading_typography_font = get_theme_mod('charity_nonprofit_heading_typography_font', 'Lexend'); // Add a fallback if the color isn't set

	if ($charity_nonprofit_heading_typography_font) {
		$charity_nonprofit_custom_css .= ':root {';
		$charity_nonprofit_custom_css .= '--font-head: ' . esc_attr($charity_nonprofit_heading_typography_font) . ';';
		$charity_nonprofit_custom_css .= '}';
	}
	
	$charity_nonprofit_columns = get_theme_mod('charity_nonprofit_posts_per_columns', 3);
	$charity_nonprofit_columns = absint($charity_nonprofit_columns);
	if ( $charity_nonprofit_columns < 1 || $charity_nonprofit_columns > 6 ) {
		$charity_nonprofit_columns = 3;
	}
	$charity_nonprofit_custom_css .= "
		.site-content .article-wraper-archive {
			grid-template-columns: repeat({$charity_nonprofit_columns}, 1fr);
		}
	";

	$charity_nonprofit_copyright_alignment = get_theme_mod( 'charity_nonprofit_copyright_alignment', 'Default' );
	if ( $charity_nonprofit_copyright_alignment === 'Reverse' ) {
		$charity_nonprofit_custom_css .= '.site-info .column-row { flex-direction: row-reverse; }';
		$charity_nonprofit_custom_css .= '.footer-credits { justify-content: flex-end; }';
		$charity_nonprofit_custom_css .= '.footer-copyright { text-align: right; }';
		$charity_nonprofit_custom_css .= '.site-info .column.column-3 { text-align: left; }';
	} elseif ( $charity_nonprofit_copyright_alignment === 'Center' ) {
		$charity_nonprofit_custom_css .= '.site-info .column-row { flex-direction: column; align-items: center; gap: 15px; }';
		$charity_nonprofit_custom_css .= '.footer-credits { justify-content: center; }';
		$charity_nonprofit_custom_css .= '.footer-copyright { text-align: center; }';
		$charity_nonprofit_custom_css .= '.site-info .column.column-3 { text-align: center; }';
	}

	$charity_nonprofit_footer_widget_background_color = get_theme_mod('charity_nonprofit_footer_widget_background_color');
	if ($charity_nonprofit_footer_widget_background_color) {

		$charity_nonprofit_custom_css .= "
			.footer-widgetarea {
				background-color: ". esc_attr($charity_nonprofit_footer_widget_background_color) .";
			}
		";
	}

	$charity_nonprofit_footer_widget_background_image = get_theme_mod('charity_nonprofit_footer_widget_background_image');
	if ($charity_nonprofit_footer_widget_background_image) {
		$charity_nonprofit_custom_css .= "
			.footer-widgetarea {
				background-image: url(" . esc_url($charity_nonprofit_footer_widget_background_image) . ");
			}
		";
	}

	$charity_nonprofit_copyright_font_size = get_theme_mod('charity_nonprofit_copyright_font_size');
	if ($charity_nonprofit_copyright_font_size) {

		$charity_nonprofit_custom_css .= "
			.footer-copyright {
				font-size: ". esc_attr($charity_nonprofit_copyright_font_size) ."px;
			}
		";
	}