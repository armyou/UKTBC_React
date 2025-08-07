<?php
/**
* 404 Page Settings.
*
* @package Charity Nonprofit
*/

$charity_nonprofit_default = charity_nonprofit_get_default_theme_options();

$wp_customize->add_section( 'charity_nonprofit_404_page_settings',
    array(
        'title'      => esc_html__( '404 Page Settings', 'charity-nonprofit' ),
        'priority'   => 200,
        'capability' => 'edit_theme_options',
        'panel'      => 'charity_nonprofit_theme_addons_panel',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_404_main_title',
    array(
        'default'           => $charity_nonprofit_default['charity_nonprofit_404_main_title'],
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control( 'charity_nonprofit_404_main_title',
    array(
        'label'    => esc_html__( '404 Main Title', 'charity-nonprofit' ),
        'section'  => 'charity_nonprofit_404_page_settings',
        'type'     => 'text',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_404_subtitle_one',
    array(
        'default'           => $charity_nonprofit_default['charity_nonprofit_404_subtitle_one'],
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control( 'charity_nonprofit_404_subtitle_one',
    array(
        'label'    => esc_html__( '404 Sub Title One', 'charity-nonprofit' ),
        'section'  => 'charity_nonprofit_404_page_settings',
        'type'     => 'text',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_404_para_one',
    array(
        'default'           => $charity_nonprofit_default['charity_nonprofit_404_para_one'],
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control( 'charity_nonprofit_404_para_one',
    array(
        'label'    => esc_html__( '404 Para Text One', 'charity-nonprofit' ),
        'section'  => 'charity_nonprofit_404_page_settings',
        'type'     => 'text',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_404_subtitle_two',
    array(
        'default'           => $charity_nonprofit_default['charity_nonprofit_404_subtitle_two'],
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control( 'charity_nonprofit_404_subtitle_two',
    array(
        'label'    => esc_html__( '404 Sub Title Two', 'charity-nonprofit' ),
        'section'  => 'charity_nonprofit_404_page_settings',
        'type'     => 'text',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_404_para_two',
    array(
        'default'           => $charity_nonprofit_default['charity_nonprofit_404_para_two'],
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control( 'charity_nonprofit_404_para_two',
    array(
        'label'    => esc_html__( '404 Para Text Two', 'charity-nonprofit' ),
        'section'  => 'charity_nonprofit_404_page_settings',
        'type'     => 'text',
    )
);