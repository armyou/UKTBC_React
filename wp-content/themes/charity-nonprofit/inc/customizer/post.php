<?php
/**
* Posts Settings.
*
* @package Charity Nonprofit
*/

$charity_nonprofit_default = charity_nonprofit_get_default_theme_options();

// Single Post Section.
$wp_customize->add_section( 'charity_nonprofit_single_posts_settings',
    array(
    'title'      => esc_html__( 'Single Meta Information Settings', 'charity-nonprofit' ),
    'priority'   => 35,
    'capability' => 'edit_theme_options',
    'panel'      => 'charity_nonprofit_theme_option_panel',
    )
);

$wp_customize->add_setting('charity_nonprofit_display_single_post_image',
    array(
        'default' => $charity_nonprofit_default['charity_nonprofit_display_single_post_image'],
        'capability' => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
    )
);
$wp_customize->add_control('charity_nonprofit_display_single_post_image',
    array(
        'label' => esc_html__('Enable Single Posts Image', 'charity-nonprofit'),
        'section' => 'charity_nonprofit_single_posts_settings',
        'type' => 'checkbox',
    )
);

$wp_customize->add_setting('charity_nonprofit_post_author',
    array(
        'default' => $charity_nonprofit_default['charity_nonprofit_post_author'],
        'capability' => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
    )
);
$wp_customize->add_control('charity_nonprofit_post_author',
    array(
        'label' => esc_html__('Enable Posts Author', 'charity-nonprofit'),
        'section' => 'charity_nonprofit_single_posts_settings',
        'type' => 'checkbox',
    )
);

$wp_customize->add_setting('charity_nonprofit_post_date',
    array(
        'default' => $charity_nonprofit_default['charity_nonprofit_post_date'],
        'capability' => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
    )
);
$wp_customize->add_control('charity_nonprofit_post_date',
    array(
        'label' => esc_html__('Enable Posts Date', 'charity-nonprofit'),
        'section' => 'charity_nonprofit_single_posts_settings',
        'type' => 'checkbox',
    )
);

$wp_customize->add_setting('charity_nonprofit_post_category',
    array(
        'default' => $charity_nonprofit_default['charity_nonprofit_post_category'],
        'capability' => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
    )
);
$wp_customize->add_control('charity_nonprofit_post_category',
    array(
        'label' => esc_html__('Enable Posts Category', 'charity-nonprofit'),
        'section' => 'charity_nonprofit_single_posts_settings',
        'type' => 'checkbox',
    )
);

$wp_customize->add_setting('charity_nonprofit_post_tags',
    array(
        'default' => $charity_nonprofit_default['charity_nonprofit_post_tags'],
        'capability' => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
    )
);
$wp_customize->add_control('charity_nonprofit_post_tags',
    array(
        'label' => esc_html__('Enable Posts Tags', 'charity-nonprofit'),
        'section' => 'charity_nonprofit_single_posts_settings',
        'type' => 'checkbox',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_single_page_content_alignment',
    array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_single_page_content_alignment'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'charity_nonprofit_sanitize_page_content_alignment',
    )
);
$wp_customize->add_control( 'charity_nonprofit_single_page_content_alignment',
    array(
    'label'       => esc_html__( 'Single Page Content Alignment', 'charity-nonprofit' ),
    'section'     => 'charity_nonprofit_single_posts_settings',
    'type'        => 'select',
    'choices'     => array(
        'left' => esc_html__( 'Left', 'charity-nonprofit' ),
        'center'  => esc_html__( 'Center', 'charity-nonprofit' ),
        'right'    => esc_html__( 'Right', 'charity-nonprofit' ),
        ),
    )
);

$wp_customize->add_setting( 'charity_nonprofit_single_post_content_alignment',
    array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_single_post_content_alignment'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'charity_nonprofit_sanitize_page_content_alignment',
    )
);
$wp_customize->add_control( 'charity_nonprofit_single_post_content_alignment',
    array(
    'label'       => esc_html__( 'Single Post Content Alignment', 'charity-nonprofit' ),
    'section'     => 'charity_nonprofit_single_posts_settings',
    'type'        => 'select',
    'choices'     => array(
        'left' => esc_html__( 'Left', 'charity-nonprofit' ),
        'center'  => esc_html__( 'Center', 'charity-nonprofit' ),
        'right'    => esc_html__( 'Right', 'charity-nonprofit' ),
        ),
    )
);

// Archive Post Section.
$wp_customize->add_section( 'charity_nonprofit_posts_settings',
    array(
    'title'      => esc_html__( 'Archive Meta Information Settings', 'charity-nonprofit' ),
    'priority'   => 36,
    'capability' => 'edit_theme_options',
    'panel'      => 'charity_nonprofit_theme_option_panel',
    )
);

$wp_customize->add_setting('charity_nonprofit_display_archive_post_format_icon',
    array(
        'default' => $charity_nonprofit_default['charity_nonprofit_display_archive_post_format_icon'],
        'capability' => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
    )
);
$wp_customize->add_control('charity_nonprofit_display_archive_post_format_icon',
    array(
        'label' => esc_html__('Enable Posts Format Icon', 'charity-nonprofit'),
        'section' => 'charity_nonprofit_posts_settings',
        'type' => 'checkbox',
    )
);

$wp_customize->add_setting('charity_nonprofit_display_archive_post_image',
    array(
        'default' => $charity_nonprofit_default['charity_nonprofit_display_archive_post_image'],
        'capability' => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
    )
);
$wp_customize->add_control('charity_nonprofit_display_archive_post_image',
    array(
        'label' => esc_html__('Enable Posts Image', 'charity-nonprofit'),
        'section' => 'charity_nonprofit_posts_settings',
        'type' => 'checkbox',
    )
);

$wp_customize->add_setting('charity_nonprofit_display_archive_post_category',
    array(
        'default' => $charity_nonprofit_default['charity_nonprofit_display_archive_post_category'],
        'capability' => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
    )
);
$wp_customize->add_control('charity_nonprofit_display_archive_post_category',
    array(
        'label' => esc_html__('Enable Posts Category', 'charity-nonprofit'),
        'section' => 'charity_nonprofit_posts_settings',
        'type' => 'checkbox',
    )
);

$wp_customize->add_setting('charity_nonprofit_display_archive_post_title',
    array(
        'default' => $charity_nonprofit_default['charity_nonprofit_display_archive_post_title'],
        'capability' => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
    )
);
$wp_customize->add_control('charity_nonprofit_display_archive_post_title',
    array(
        'label' => esc_html__('Enable Posts Title', 'charity-nonprofit'),
        'section' => 'charity_nonprofit_posts_settings',
        'type' => 'checkbox',
    )
);

$wp_customize->add_setting('charity_nonprofit_display_archive_post_content',
    array(
        'default' => $charity_nonprofit_default['charity_nonprofit_display_archive_post_content'],
        'capability' => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
    )
);
$wp_customize->add_control('charity_nonprofit_display_archive_post_content',
    array(
        'label' => esc_html__('Enable Posts Content', 'charity-nonprofit'),
        'section' => 'charity_nonprofit_posts_settings',
        'type' => 'checkbox',
    )
);

$wp_customize->add_setting('charity_nonprofit_display_archive_post_button',
    array(
        'default' => $charity_nonprofit_default['charity_nonprofit_display_archive_post_button'],
        'capability' => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
    )
);
$wp_customize->add_control('charity_nonprofit_display_archive_post_button',
    array(
        'label' => esc_html__('Enable Posts Button', 'charity-nonprofit'),
        'section' => 'charity_nonprofit_posts_settings',
        'type' => 'checkbox',
    )
);

$wp_customize->add_setting('charity_nonprofit_excerpt_limit',
    array(
        'default'           => $charity_nonprofit_default['charity_nonprofit_excerpt_limit'],
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_number_range',
    )
);
$wp_customize->add_control('charity_nonprofit_excerpt_limit',
    array(
        'label'       => esc_html__('Blog Posts Excerpt limit', 'charity-nonprofit'),
        'section'     => 'charity_nonprofit_posts_settings',
        'type'        => 'number',
        'input_attrs' => array(
           'min'   => 1,
           'max'   => 100,
           'step'   => 1,
        ),
    )
);

$wp_customize->add_setting( 'charity_nonprofit_archive_image_size',
	array(
	'default'           => 'medium',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'charity_nonprofit_sanitize_select',
	)
);
$wp_customize->add_control( 'charity_nonprofit_archive_image_size',
	array(
	'label'       => esc_html__( 'Blog Posts Image Size', 'charity-nonprofit' ),
	'section'     => 'charity_nonprofit_posts_settings',
	'type'        => 'select',
	'choices'               => array(
		'full' => esc_html__( 'Large Size Image', 'charity-nonprofit' ),
		'large' => esc_html__( 'Big Size Image', 'charity-nonprofit' ),
		'medium' => esc_html__( 'Medium Size Image', 'charity-nonprofit' ),
		'small' => esc_html__( 'Small Size Image', 'charity-nonprofit' ),
		'xsmall' => esc_html__( 'Extra Small Size Image', 'charity-nonprofit' ),
		'thumbnail' => esc_html__( 'Thumbnail Size Image', 'charity-nonprofit' ),
	    ),
	)
);

$wp_customize->add_setting('charity_nonprofit_posts_per_columns',
    array(
    'default'           => '3',
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'charity_nonprofit_sanitize_number_range',
    )
);
$wp_customize->add_control('charity_nonprofit_posts_per_columns',
    array(
    'label'       => esc_html__('Blog Posts Per Column', 'charity-nonprofit'),
    'section'     => 'charity_nonprofit_posts_settings',
    'type'        => 'number',
    'input_attrs' => array(
    'min'   => 1,
    'max'   => 5,
    'step'   => 1,
    ),
    )
);