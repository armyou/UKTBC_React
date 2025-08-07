<?php
/**
* Layouts Settings.
*
* @package Charity Nonprofit
*/

$charity_nonprofit_default = charity_nonprofit_get_default_theme_options();

// Layout Section.
$wp_customize->add_section( 'charity_nonprofit_layout_setting',
	array(
	'title'      => esc_html__( 'Sidebar Settings', 'charity-nonprofit' ),
	'priority'   => 20,
	'capability' => 'edit_theme_options',
	'panel'      => 'charity_nonprofit_theme_option_panel',
	)
);

$wp_customize->add_setting( 'charity_nonprofit_global_sidebar_layout',
    array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_global_sidebar_layout'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'charity_nonprofit_sanitize_sidebar_option',
    )
);
$wp_customize->add_control( 'charity_nonprofit_global_sidebar_layout',
    array(
    'label'       => esc_html__( 'Global Sidebar Layout', 'charity-nonprofit' ),
    'section'     => 'charity_nonprofit_layout_setting',
    'type'        => 'select',
    'choices'     => array(
        'right-sidebar' => esc_html__( 'Right Sidebar', 'charity-nonprofit' ),
        'left-sidebar'  => esc_html__( 'Left Sidebar', 'charity-nonprofit' ),
        'no-sidebar'    => esc_html__( 'No Sidebar', 'charity-nonprofit' ),
        ),
    )
);

$wp_customize->add_setting('charity_nonprofit_page_sidebar_layout', array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_global_sidebar_layout'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'charity_nonprofit_sanitize_sidebar_option',
));

$wp_customize->add_control('charity_nonprofit_page_sidebar_layout', array(
    'label'       => esc_html__('Single Page Sidebar Layout', 'charity-nonprofit'),
    'section'     => 'charity_nonprofit_layout_setting',
    'type'        => 'select',
    'choices'     => array(
        'right-sidebar' => esc_html__('Right Sidebar', 'charity-nonprofit'),
        'left-sidebar'  => esc_html__('Left Sidebar', 'charity-nonprofit'),
        'no-sidebar'    => esc_html__('No Sidebar', 'charity-nonprofit'),
    ),
));

$wp_customize->add_setting('charity_nonprofit_post_sidebar_layout', array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_global_sidebar_layout'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'charity_nonprofit_sanitize_sidebar_option',
));

$wp_customize->add_control('charity_nonprofit_post_sidebar_layout', array(
    'label'       => esc_html__('Single Post Sidebar Layout', 'charity-nonprofit'),
    'section'     => 'charity_nonprofit_layout_setting',
    'type'        => 'select',
    'choices'     => array(
        'right-sidebar' => esc_html__('Right Sidebar', 'charity-nonprofit'),
        'left-sidebar'  => esc_html__('Left Sidebar', 'charity-nonprofit'),
        'no-sidebar'    => esc_html__('No Sidebar', 'charity-nonprofit'),
    ),
));

$wp_customize->add_setting('charity_nonprofit_sticky_sidebar',
    array(
        'default'           => true,
        'capability' => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
    )
);
$wp_customize->add_control('charity_nonprofit_sticky_sidebar',
    array(
        'label' => esc_html__('Enable/Disable Sticky Sidebar', 'charity-nonprofit'),
        'section' => 'charity_nonprofit_layout_setting',
        'type' => 'checkbox',
    )
);