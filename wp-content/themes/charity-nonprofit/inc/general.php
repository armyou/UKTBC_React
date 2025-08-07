<?php

function charity_nonprofit_enqueue_fonts() {
    $charity_nonprofit_default_font_content = 'lexend';
    $charity_nonprofit_default_font_heading = 'lexend';

    $charity_nonprofit_font_content = esc_attr(get_theme_mod('charity_nonprofit_content_typography_font', $charity_nonprofit_default_font_content));
    $charity_nonprofit_font_heading = esc_attr(get_theme_mod('charity_nonprofit_heading_typography_font', $charity_nonprofit_default_font_heading));

    $charity_nonprofit_css = '';

    // Always enqueue main font
    $charity_nonprofit_css .= '
    :root {
        --font-main: ' . $charity_nonprofit_font_content . ', ' . (in_array($charity_nonprofit_font_content, ['bitter', 'charis-sil']) ? 'serif' : 'sans-serif') . '!important;
    }';
    wp_enqueue_style('charity-nonprofit-style-font-general', get_template_directory_uri() . '/fonts/' . $charity_nonprofit_font_content . '/font.css');

    // Always enqueue header font
    $charity_nonprofit_css .= '
    :root {
        --font-head: ' . $charity_nonprofit_font_heading . ', ' . (in_array($charity_nonprofit_font_heading, ['bitter', 'charis-sil']) ? 'serif' : 'sans-serif') . '!important;
    }';
    wp_enqueue_style('charity-nonprofit-style-font-h', get_template_directory_uri() . '/fonts/' . $charity_nonprofit_font_heading . '/font.css');

    // Add inline style
    wp_add_inline_style('charity-nonprofit-style-font-general', $charity_nonprofit_css);
}
add_action('wp_enqueue_scripts', 'charity_nonprofit_enqueue_fonts', 50);