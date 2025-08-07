<?php
/**
* Header Options.
*
* @package Charity Nonprofit
*/

$charity_nonprofit_default = charity_nonprofit_get_default_theme_options();

// Header Section.
$wp_customize->add_section( 'charity_nonprofit_button_header_setting',
	array(
	'title'      => esc_html__( 'Header Settings', 'charity-nonprofit' ),
	'priority'   => 10,
	'capability' => 'edit_theme_options',
	'panel'      => 'charity_nonprofit_theme_option_panel',
	)
);

$wp_customize->add_setting('charity_nonprofit_sticky',
    array(
        'default' => $charity_nonprofit_default['charity_nonprofit_sticky'],
        'capability' => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
    )
);
$wp_customize->add_control('charity_nonprofit_sticky',
    array(
        'label' => esc_html__('Enable Sticky Header', 'charity-nonprofit'),
        'section' => 'charity_nonprofit_button_header_setting',
        'type' => 'checkbox',
    )
);

$wp_customize->add_setting('charity_nonprofit_menu_font_size',
    array(
        'default'           => $charity_nonprofit_default['charity_nonprofit_menu_font_size'],
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_number_range',
    )
);
$wp_customize->add_control('charity_nonprofit_menu_font_size',
    array(
        'label'       => esc_html__('Menu Font Size', 'charity-nonprofit'),
        'section'     => 'charity_nonprofit_button_header_setting',
        'type'        => 'number',
        'input_attrs' => array(
           'min'   => 1,
           'max'   => 30,
           'step'   => 1,
        ),
    )
);

$wp_customize->add_setting( 'charity_nonprofit_menu_text_transform',
    array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_menu_text_transform'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'charity_nonprofit_sanitize_menu_transform',
    )
);
$wp_customize->add_control( 'charity_nonprofit_menu_text_transform',
    array(
    'label'       => esc_html__( 'Menu Text Transform', 'charity-nonprofit' ),
    'section'     => 'charity_nonprofit_button_header_setting',
    'type'        => 'select',
    'choices'     => array(
        'capitalize' => esc_html__( 'Capitalize', 'charity-nonprofit' ),
        'uppercase'  => esc_html__( 'Uppercase', 'charity-nonprofit' ),
        'lowercase'    => esc_html__( 'Lowercase', 'charity-nonprofit' ),
        ),
    )
);

$wp_customize->add_setting('charity_nonprofit_header_search',
    array(
        'default' => $charity_nonprofit_default['charity_nonprofit_header_search'],
        'capability' => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
    )
);
$wp_customize->add_control('charity_nonprofit_header_search',
    array(
        'label' => esc_html__('Enable Search', 'charity-nonprofit'),
        'section' => 'charity_nonprofit_button_header_setting',
        'type' => 'checkbox',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_header_section_button_text',
    array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_header_section_button_text'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control( 'charity_nonprofit_header_section_button_text',
    array(
    'label'    => esc_html__( 'Header Button Text', 'charity-nonprofit' ),
    'section'  => 'charity_nonprofit_button_header_setting',
    'type'     => 'text',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_header_section_button_url',
    array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_header_section_button_url'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control( 'charity_nonprofit_header_section_button_url',
    array(
    'label'    => esc_html__( 'Header Button Url', 'charity-nonprofit' ),
    'section'  => 'charity_nonprofit_button_header_setting',
    'type'     => 'url',
    )
);