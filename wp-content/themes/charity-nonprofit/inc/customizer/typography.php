<?php
/**
* Typography Settings.
*
* @package Charity Nonprofit
*/

$charity_nonprofit_default = charity_nonprofit_get_default_theme_options();

// Layout Section.
$wp_customize->add_section( 'charity_nonprofit_typography_setting',
	array(
	'title'      => esc_html__( 'Typography Settings', 'charity-nonprofit' ),
	'priority'   => 21,
	'capability' => 'edit_theme_options',
	'panel'      => 'charity_nonprofit_theme_option_panel',
	)
);

// -----------------  Font array
$charity_nonprofit_fonts = array(
    'Select'           => __('Default Font', 'charity-nonprofit'),
    'bad-script' => 'Bad Script',
    'bitter'     => 'Bitter',
    'cuprum'     => 'Cuprum',
    'exo-2'      => 'Exo 2',
    'jost'       => 'Jost',
    'Cormorant'  => 'Cormorant',
    'montserrat' => 'montserrat',
    'lexend'     => 'Lexend',
);

 // -----------------  General Content Font
 $wp_customize->add_setting( 'charity_nonprofit_content_typography_font', array(
    'default'           => 'lexend',
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'charity_nonprofit_radio_sanitize',
) );
$wp_customize->add_control( 'charity_nonprofit_content_typography_font', array(
    'type'     => 'select',
    'label'    => esc_html__( 'General Content Font', 'charity-nonprofit' ),
    'section'  => 'charity_nonprofit_typography_setting',
    'settings' => 'charity_nonprofit_content_typography_font',
    'choices'  => $charity_nonprofit_fonts,
) );

 // -----------------  General Heading Font
$wp_customize->add_setting( 'charity_nonprofit_heading_typography_font', array(
    'default'           => 'lexend',
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'charity_nonprofit_radio_sanitize',
) );
$wp_customize->add_control( 'charity_nonprofit_heading_typography_font', array(
    'type'     => 'select',
    'label'    => esc_html__( 'General Heading Font', 'charity-nonprofit' ),
    'section'  => 'charity_nonprofit_typography_setting',
    'settings' => 'charity_nonprofit_heading_typography_font',
    'choices'  => $charity_nonprofit_fonts,
) );