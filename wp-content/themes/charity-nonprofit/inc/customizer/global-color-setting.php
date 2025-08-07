<?php
/**
* Global Color Settings.
*
* @package Charity Nonprofit
*/

$charity_nonprofit_default = charity_nonprofit_get_default_theme_options();

// Layout Section.
$wp_customize->add_section( 'charity_nonprofit_global_color_setting',
	array(
	'title'      => esc_html__( 'Global Color Settings', 'charity-nonprofit' ),
	'priority'   => 1,
	'capability' => 'edit_theme_options',
	'panel'      => 'charity_nonprofit_theme_option_panel',
	)
);

$wp_customize->add_setting( 'charity_nonprofit_global_color',
    array(
    'default'           => '#FD8457',
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'sanitize_hex_color',
    )
);
$wp_customize->add_control( 
    new WP_Customize_Color_Control( 
    $wp_customize, 
    'charity_nonprofit_global_color',
    array(
        'label'      => esc_html__( 'Global Color', 'charity-nonprofit' ),
        'section'    => 'charity_nonprofit_global_color_setting',
        'settings'   => 'charity_nonprofit_global_color',
    ) ) 
);