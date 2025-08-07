<?php
/**
 * Body Classes.
 * @package Charity Nonprofit
 */

if (!function_exists('charity_nonprofit_body_classes')) :

    function charity_nonprofit_body_classes($charity_nonprofit_classes)
    {
        $charity_nonprofit_defaults = charity_nonprofit_get_default_theme_options();
        $charity_nonprofit_layout = charity_nonprofit_get_final_sidebar_layout();

        // Adds a class of hfeed to non-singular pages.
        if (!is_singular()) {
            $charity_nonprofit_classes[] = 'hfeed';
        }

        // Sidebar layout logic
        $charity_nonprofit_classes[] = $charity_nonprofit_layout;

        // Copyright alignment
        $copyright_alignment = get_theme_mod('charity_nonprofit_copyright_alignment', 'Default');
        $charity_nonprofit_classes[] = 'copyright-' . strtolower($copyright_alignment);

        return $charity_nonprofit_classes;
    }

endif;

add_filter('body_class', 'charity_nonprofit_body_classes');