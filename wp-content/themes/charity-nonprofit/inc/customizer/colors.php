<?php
/**
* Color Settings.
* @package Charity Nonprofit
*/

$charity_nonprofit_default = charity_nonprofit_get_default_theme_options();

$wp_customize->add_setting( 'charity_nonprofit_default_text_color',
    array(
    'default'           => '',
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'sanitize_hex_color',
    )
);
$wp_customize->add_control( 
    new WP_Customize_Color_Control( 
    $wp_customize, 
    'charity_nonprofit_default_text_color',
    array(
        'label'      => esc_html__( 'Text Color', 'charity-nonprofit' ),
        'section'    => 'colors',
        'settings'   => 'charity_nonprofit_default_text_color',
    ) ) 
);

$wp_customize->add_setting( 'charity_nonprofit_border_color',
    array(
    'default'           => '',
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'sanitize_hex_color',
    )
);
$wp_customize->add_control( 
    new WP_Customize_Color_Control( 
    $wp_customize, 
    'charity_nonprofit_border_color',
    array(
        'label'      => esc_html__( 'Border Color', 'charity-nonprofit' ),
        'section'    => 'colors',
        'settings'   => 'charity_nonprofit_border_color',
    ) ) 
);