<?php
/**
* Custom Addons.
*
* @package Charity Nonprofit
*/
$charity_nonprofit_default = charity_nonprofit_get_default_theme_options();

$wp_customize->add_section( 'charity_nonprofit_theme_pagination_options',
    array(
    'title'      => esc_html__( 'Customizer Custom Settings', 'charity-nonprofit' ),
    'priority'   => 10,
    'capability' => 'edit_theme_options',
    'panel'      => 'charity_nonprofit_theme_addons_panel',
    )
);

$wp_customize->add_setting('charity_nonprofit_theme_loader',
    array(
        'default' => $charity_nonprofit_default['charity_nonprofit_theme_loader'],
        'capability' => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
    )
);
$wp_customize->add_control('charity_nonprofit_theme_loader',
    array(
        'label' => esc_html__('Enable Preloader', 'charity-nonprofit'),
        'section' => 'charity_nonprofit_theme_pagination_options',
        'type' => 'checkbox',
    )
);

// Add Pagination Enable/Disable option to Customizer
$wp_customize->add_setting( 'charity_nonprofit_enable_pagination', 
    array(
        'default'           => true, // Default is enabled
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_enable_pagination', // Sanitize the input
    )
);

// Add the control to the Customizer
$wp_customize->add_control( 'charity_nonprofit_enable_pagination', 
    array(
        'label'    => esc_html__( 'Enable Pagination', 'charity-nonprofit' ),
        'section'  => 'charity_nonprofit_theme_pagination_options', // Add to the correct section
        'type'     => 'checkbox',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_theme_pagination_type', 
    array(
        'default'           => 'numeric', // Set "numeric" as the default
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_pagination_type', // Use our sanitize function
    )
);

$wp_customize->add_control( 'charity_nonprofit_theme_pagination_type',
    array(
        'label'       => esc_html__( 'Pagination Style', 'charity-nonprofit' ),
        'section'     => 'charity_nonprofit_theme_pagination_options',
        'type'        => 'select',
        'choices'     => array(
            'numeric'      => esc_html__( 'Numeric (Page Numbers)', 'charity-nonprofit' ),
            'newer_older'  => esc_html__( 'Newer/Older (Previous/Next)', 'charity-nonprofit' ), // Renamed to "Newer/Older"
        ),
    )
);



$wp_customize->add_setting( 'charity_nonprofit_theme_pagination_options_alignment',
    array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_theme_pagination_options_alignment'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'charity_nonprofit_sanitize_pagination_meta',
    )
);
$wp_customize->add_control( 'charity_nonprofit_theme_pagination_options_alignment',
    array(
    'label'       => esc_html__( 'Pagination Alignment', 'charity-nonprofit' ),
    'section'     => 'charity_nonprofit_theme_pagination_options',
    'type'        => 'select',
    'choices'     => array(
        'Center'    => esc_html__( 'Center', 'charity-nonprofit' ),
        'Right' => esc_html__( 'Right', 'charity-nonprofit' ),
        'Left'  => esc_html__( 'Left', 'charity-nonprofit' ),
        ),
    )
);

$wp_customize->add_setting('charity_nonprofit_theme_breadcrumb_enable',
    array(
        'default' => $charity_nonprofit_default['charity_nonprofit_theme_breadcrumb_enable'],
        'capability' => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
    )
	);
	$wp_customize->add_control('charity_nonprofit_theme_breadcrumb_enable',
	    array(
	        'label' => esc_html__('Enable Breadcrumb', 'charity-nonprofit'),
	        'section' => 'charity_nonprofit_theme_pagination_options',
	        'type' => 'checkbox',
	    )
	);

$wp_customize->add_setting( 'charity_nonprofit_theme_breadcrumb_options_alignment',
    array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_theme_breadcrumb_options_alignment'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'charity_nonprofit_sanitize_pagination_meta',
    )
);
$wp_customize->add_control( 'charity_nonprofit_theme_breadcrumb_options_alignment',
    array(
    'label'       => esc_html__( 'Breadcrumb Alignment', 'charity-nonprofit' ),
    'section'     => 'charity_nonprofit_theme_pagination_options',
    'type'        => 'select',
    'choices'     => array(
        'Center'    => esc_html__( 'Center', 'charity-nonprofit' ),
        'Right' => esc_html__( 'Right', 'charity-nonprofit' ),
        'Left'  => esc_html__( 'Left', 'charity-nonprofit' ),
        ),
    )
);

$wp_customize->add_setting('charity_nonprofit_breadcrumb_font_size',
    array(
        'default'           => $charity_nonprofit_default['charity_nonprofit_breadcrumb_font_size'],
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_number_range',
    )
);
$wp_customize->add_control('charity_nonprofit_breadcrumb_font_size',
    array(
        'label'       => esc_html__('Breadcrumb Font Size', 'charity-nonprofit'),
        'section'     => 'charity_nonprofit_theme_pagination_options',
        'type'        => 'number',
        'input_attrs' => array(
           'min'   => 1,
           'max'   => 45,
           'step'   => 1,
        ),
    )
);