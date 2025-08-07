<?php
/**
* Additional Woocommerce Settings.
*
* @package Charity Nonprofit
*/

$charity_nonprofit_default = charity_nonprofit_get_default_theme_options();

// Additional Woocommerce Section.
$wp_customize->add_section( 'charity_nonprofit_additional_woocommerce_options',
	array(
	'title'      => esc_html__( 'Additional Woocommerce Options', 'charity-nonprofit' ),
	'priority'   => 210,
	'capability' => 'edit_theme_options',
	'panel'      => 'charity_nonprofit_theme_option_panel',
	)
);

	$wp_customize->add_setting('charity_nonprofit_per_columns',
		array(
		'default'           => $charity_nonprofit_default['charity_nonprofit_per_columns'],
		'capability'        => 'edit_theme_options',
		'sanitize_callback' => 'charity_nonprofit_sanitize_number_range',
		)
	);
	$wp_customize->add_control('charity_nonprofit_per_columns',
		array(
		'label'       => esc_html__('Products Per Column', 'charity-nonprofit'),
		'section'     => 'charity_nonprofit_additional_woocommerce_options',
		'type'        => 'number',
		'input_attrs' => array(
		'min'   => 1,
		'max'   => 6,
		'step'   => 1,
		),
		)
	);

	$wp_customize->add_setting('charity_nonprofit_product_per_page',
		array(
		'default'           => $charity_nonprofit_default['charity_nonprofit_product_per_page'],
		'capability'        => 'edit_theme_options',
		'sanitize_callback' => 'charity_nonprofit_sanitize_number_range',
		)
	);
	$wp_customize->add_control('charity_nonprofit_product_per_page',
		array(
		'label'       => esc_html__('Products Per Page', 'charity-nonprofit'),
		'section'     => 'charity_nonprofit_additional_woocommerce_options',
		'type'        => 'number',
		'input_attrs' => array(
		'min'   => 1,
		'max'   => 100,
		'step'   => 1,
		),
		)
	);

	$wp_customize->add_setting('charity_nonprofit_show_hide_related_product',
    array(
        'default' => $charity_nonprofit_default['charity_nonprofit_show_hide_related_product'],
        'capability' => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
    )
	);
	$wp_customize->add_control('charity_nonprofit_show_hide_related_product',
	    array(
	        'label' => esc_html__('Enable Related Products', 'charity-nonprofit'),
	        'section' => 'charity_nonprofit_additional_woocommerce_options',
	        'type' => 'checkbox',
	    )
	);

	$wp_customize->add_setting('charity_nonprofit_custom_related_products_number',
		array(
		'default'           => $charity_nonprofit_default['charity_nonprofit_custom_related_products_number'],
		'capability'        => 'edit_theme_options',
		'sanitize_callback' => 'charity_nonprofit_sanitize_number_range',
		)
	);
	$wp_customize->add_control('charity_nonprofit_custom_related_products_number',
		array(
		'label'       => esc_html__('Related Products Per Page', 'charity-nonprofit'),
		'section'     => 'charity_nonprofit_additional_woocommerce_options',
		'type'        => 'number',
		'input_attrs' => array(
		'min'   => 1,
		'max'   => 10,
		'step'   => 1,
		),
		)
	);

	$wp_customize->add_setting('charity_nonprofit_custom_related_products_number_per_row',
		array(
		'default'           => $charity_nonprofit_default['charity_nonprofit_custom_related_products_number_per_row'],
		'capability'        => 'edit_theme_options',
		'sanitize_callback' => 'charity_nonprofit_sanitize_number_range',
		)
	);
	$wp_customize->add_control('charity_nonprofit_custom_related_products_number_per_row',
		array(
		'label'       => esc_html__('Related Products Per Row', 'charity-nonprofit'),
		'section'     => 'charity_nonprofit_additional_woocommerce_options',
		'type'        => 'number',
		'input_attrs' => array(
		'min'   => 1,
		'max'   => 5,
		'step'   => 1,
		),
		)
	);