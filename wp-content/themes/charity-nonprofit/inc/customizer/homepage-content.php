<?php
/**
* Header Banner Options.
*
* @package Charity Nonprofit
*/

$charity_nonprofit_default = charity_nonprofit_get_default_theme_options();
$charity_nonprofit_post_category_list = charity_nonprofit_post_category_list();

$wp_customize->add_section( 'charity_nonprofit_header_slider_setting',
    array(
    'title'      => esc_html__( 'Slider Settings', 'charity-nonprofit' ),
    'priority'   => 10,
    'capability' => 'edit_theme_options',
    'panel'      => 'charity_nonprofit_theme_home_pannel',
    )
);

// Show/Hide Site Logo
$wp_customize->add_setting('charity_nonprofit_display_logo', array(
    'default'           => false,
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
));
$wp_customize->add_control('charity_nonprofit_display_logo', array(
    'label'    => esc_html__('Enable / Disable Site Logo', 'charity-nonprofit'),
    'section'  => 'title_tagline',
    'type'     => 'checkbox',
));

// Show/Hide Site Title
$wp_customize->add_setting('charity_nonprofit_display_title', array(
    'default'           => true,
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
));
$wp_customize->add_control('charity_nonprofit_display_title', array(
    'label'    => esc_html__('Enable / Disable Site Title', 'charity-nonprofit'),
    'section'  => 'title_tagline',
    'type'     => 'checkbox',
));

// Show/Hide Site Tagline
$wp_customize->add_setting('charity_nonprofit_display_header_text',
    array(
        'default'           => false,
        'capability' => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
    )
);
$wp_customize->add_control('charity_nonprofit_display_header_text',
    array(
        'label' => esc_html__('Enable / Disable Site Tagline', 'charity-nonprofit'),
        'section' => 'title_tagline',
        'type' => 'checkbox',
    )
);

$wp_customize->add_setting('charity_nonprofit_header_slider',
    array(
        'default' => $charity_nonprofit_default['charity_nonprofit_header_slider'],
        'capability' => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
    )
);
$wp_customize->add_control('charity_nonprofit_header_slider',
    array(
        'label' => esc_html__('Enable Slider', 'charity-nonprofit'),
        'section' => 'charity_nonprofit_header_slider_setting',
        'type' => 'checkbox',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_slider_section_short_title',
    array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_slider_section_short_title'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control( 'charity_nonprofit_slider_section_short_title',
    array(
    'label'    => esc_html__( 'Slider Short Title', 'charity-nonprofit' ),
    'section'  => 'charity_nonprofit_header_slider_setting',
    'type'     => 'text',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_header_banner_cat',
    array(
    'default'           => '',
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'charity_nonprofit_sanitize_select',
    )
);
$wp_customize->add_control( 'charity_nonprofit_header_banner_cat',
    array(
    'label'       => esc_html__( 'Slider Post Category', 'charity-nonprofit' ),
    'section'     => 'charity_nonprofit_header_slider_setting',
    'type'        => 'select',
    'choices'     => $charity_nonprofit_post_category_list,
    )
);

// About Us Settings

$wp_customize->add_section( 'charity_nonprofit_about_setion_setting',
    array(
    'title'      => esc_html__( 'About Us Settings', 'charity-nonprofit' ),
    'priority'   => 10,
    'capability' => 'edit_theme_options',
    'panel'      => 'charity_nonprofit_theme_home_pannel',
    )
);

$wp_customize->add_setting('charity_nonprofit_about_us_image_1',
    array(
        'default' => $charity_nonprofit_default['charity_nonprofit_about_us_image_1'],
        'sanitize_callback' => 'esc_url_raw',
    )
);
$wp_customize->add_control(
    new WP_Customize_Image_Control( $wp_customize,'charity_nonprofit_about_us_image_1',
        array(
            'label' => __('About Us Image 1','charity-nonprofit'),
            'section' => 'charity_nonprofit_about_setion_setting',
            'settings' => 'charity_nonprofit_about_us_image_1',
        )
    )
);

$wp_customize->add_setting('charity_nonprofit_about_us_image_2',
    array(
        'default' => $charity_nonprofit_default['charity_nonprofit_about_us_image_2'],
        'sanitize_callback' => 'esc_url_raw',
    )
);
$wp_customize->add_control(
    new WP_Customize_Image_Control( $wp_customize,'charity_nonprofit_about_us_image_2',
        array(
            'label' => __('About Us Image 2','charity-nonprofit'),
            'section' => 'charity_nonprofit_about_setion_setting',
            'settings' => 'charity_nonprofit_about_us_image_2',
        )
    )
);

$wp_customize->add_setting( 'charity_nonprofit_about_us_section_short_title',
    array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_about_us_section_short_title'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control( 'charity_nonprofit_about_us_section_short_title',
    array(
    'label'    => esc_html__( 'About Us Short Heading ', 'charity-nonprofit' ),
    'section'  => 'charity_nonprofit_about_setion_setting',
    'type'     => 'text',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_about_us_section_title',
    array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_about_us_section_title'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control( 'charity_nonprofit_about_us_section_title',
    array(
    'label'    => esc_html__( 'About Us Heading ', 'charity-nonprofit' ),
    'section'  => 'charity_nonprofit_about_setion_setting',
    'type'     => 'text',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_team_section_subtitle',
    array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_team_section_subtitle'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control( 'charity_nonprofit_team_section_subtitle',
    array(
    'label'    => esc_html__( 'About Us Content ', 'charity-nonprofit' ),
    'section'  => 'charity_nonprofit_about_setion_setting',
    'type'     => 'text',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_about_us_list_text_1',
    array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_about_us_list_text_1'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control( 'charity_nonprofit_about_us_list_text_1',
    array(
    'label'    => esc_html__( 'About Us List 1 ', 'charity-nonprofit' ),
    'section'  => 'charity_nonprofit_about_setion_setting',
    'type'     => 'text',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_about_us_list_text_2',
    array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_about_us_list_text_2'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control( 'charity_nonprofit_about_us_list_text_2',
    array(
    'label'    => esc_html__( 'About Us List 2 ', 'charity-nonprofit' ),
    'section'  => 'charity_nonprofit_about_setion_setting',
    'type'     => 'text',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_about_us_list_text_3',
    array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_about_us_list_text_3'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control( 'charity_nonprofit_about_us_list_text_3',
    array(
    'label'    => esc_html__( 'About Us List 3 ', 'charity-nonprofit' ),
    'section'  => 'charity_nonprofit_about_setion_setting',
    'type'     => 'text',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_about_us_list_text_4',
    array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_about_us_list_text_4'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control( 'charity_nonprofit_about_us_list_text_4',
    array(
    'label'    => esc_html__( 'About Us List 4 ', 'charity-nonprofit' ),
    'section'  => 'charity_nonprofit_about_setion_setting',
    'type'     => 'text',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_about_us_list_text_5',
    array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_about_us_list_text_5'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control( 'charity_nonprofit_about_us_list_text_5',
    array(
    'label'    => esc_html__( 'About Us List 5 ', 'charity-nonprofit' ),
    'section'  => 'charity_nonprofit_about_setion_setting',
    'type'     => 'text',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_about_us_list_text_6',
    array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_about_us_list_text_6'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control( 'charity_nonprofit_about_us_list_text_6',
    array(
    'label'    => esc_html__( 'About Us List 6 ', 'charity-nonprofit' ),
    'section'  => 'charity_nonprofit_about_setion_setting',
    'type'     => 'text',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_team_section_button_text',
    array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_team_section_button_text'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control( 'charity_nonprofit_team_section_button_text',
    array(
    'label'    => esc_html__( 'About Us Button Text ', 'charity-nonprofit' ),
    'section'  => 'charity_nonprofit_about_setion_setting',
    'type'     => 'text',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_team_section_button_url',
    array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_team_section_button_url'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control( 'charity_nonprofit_team_section_button_url',
    array(
    'label'    => esc_html__( 'About Us Button Url ', 'charity-nonprofit' ),
    'section'  => 'charity_nonprofit_about_setion_setting',
    'type'     => 'text',
    )
);