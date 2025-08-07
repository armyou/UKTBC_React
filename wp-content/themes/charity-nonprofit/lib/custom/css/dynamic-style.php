<?php
/**
 * Charity Nonprofit Dynamic Styles
 *
 * @package Charity Nonprofit
 */

// Enqueue the main stylesheet
function charity_nonprofit_enqueue_styles() {
    // Replace 'your-main-stylesheet-handle' with your actual stylesheet handle
    wp_enqueue_style('charity-nonprofit-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'charity_nonprofit_enqueue_styles');

// Function to add dynamic CSS
function charity_nonprofit_dynamic_css() {
    // Get default theme options
    $charity_nonprofit_default = charity_nonprofit_get_default_theme_options();

    // Sanitize and get theme customizations
    $charity_nonprofit_default_text_color = esc_attr(get_theme_mod('charity_nonprofit_default_text_color', '')); // Default value if needed
    $charity_nonprofit_logo_width_range = absint(get_theme_mod('charity_nonprofit_logo_width_range', $charity_nonprofit_default['charity_nonprofit_logo_width_range']));
    $charity_nonprofit_breadcrumb_font_size = absint(get_theme_mod('charity_nonprofit_breadcrumb_font_size', $charity_nonprofit_default['charity_nonprofit_breadcrumb_font_size']));
    $charity_nonprofit_menu_font_size = absint(get_theme_mod('charity_nonprofit_menu_font_size', $charity_nonprofit_default['charity_nonprofit_menu_font_size']));
    $charity_nonprofit_border_color = esc_attr(get_theme_mod('charity_nonprofit_border_color', '')); // Default value if needed
    $charity_nonprofit_background_color = '#' . ltrim(esc_attr(get_theme_mod('background_color', $charity_nonprofit_default['charity_nonprofit_background_color'])), '#');

    // Create dynamic CSS
    $charity_nonprofit_dynamic_css = "
        body,
        .offcanvas-wraper,
        .header-searchbar-inner {
            background-color: {$charity_nonprofit_background_color};
        }

        a:not(:hover):not(:focus):not(.btn-fancy),
        body, button, input, select, optgroup, textarea {
            color: {$charity_nonprofit_default_text_color};
        }

        .site-topbar, .site-navigation,
        .offcanvas-main-navigation li,
        .offcanvas-main-navigation .sub-menu,
        .offcanvas-main-navigation .submenu-wrapper .submenu-toggle,
        .post-navigation,
        .widget .tab-head .twp-nav-tabs,
        .widget-area-wrapper .widget,
        .footer-widgetarea,
        .site-info,
        .right-sidebar .widget-area-wrapper,
        .left-sidebar .widget-area-wrapper,
        .widget-title,
        .widget_block .wp-block-group > .wp-block-group__inner-container > h2,
        input[type='text'],
        input[type='password'],
        input[type='email'],
        input[type='url'],
        input[type='date'],
        input[type='month'],
        input[type='time'],
        input[type='datetime'],
        input[type='datetime-local'],
        input[type='week'],
        input[type='number'],
        input[type='search'],
        input[type='tel'],
        input[type='color'],
        textarea {
            border-color: {$charity_nonprofit_border_color};
        }

        .site-logo .custom-logo-link img{
            width: {$charity_nonprofit_logo_width_range}px;
            object-fit: object-fit  ;
        }

        .site-navigation .primary-menu > li a {
            font-size: {$charity_nonprofit_menu_font_size}px;
        }

        .breadcrumbs,.woocommerce-breadcrumb {
            font-size: {$charity_nonprofit_breadcrumb_font_size}px !important;
        }
    ";

    // Add inline styles to the main stylesheet
    wp_add_inline_style('charity-nonprofit-style', $charity_nonprofit_dynamic_css); // Replace with your actual stylesheet handle
}

add_action('wp_enqueue_scripts', 'charity_nonprofit_dynamic_css');