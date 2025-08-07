<?php
/**
* Footer Settings.
*
* @package Charity Nonprofit
*/

$charity_nonprofit_default = charity_nonprofit_get_default_theme_options();

$wp_customize->add_section( 'charity_nonprofit_footer_widget_area',
	array(
	'title'      => esc_html__( 'Footer Settings', 'charity-nonprofit' ),
	'priority'   => 200,
	'capability' => 'edit_theme_options',
	'panel'      => 'charity_nonprofit_theme_option_panel',
	)
);

$wp_customize->add_setting('charity_nonprofit_display_footer',
    array(
        'default' => $charity_nonprofit_default['charity_nonprofit_display_footer'],
        'capability' => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
    )
);
$wp_customize->add_control('charity_nonprofit_display_footer',
    array(
        'label' => esc_html__('Enable Footer', 'charity-nonprofit'),
        'section' => 'charity_nonprofit_footer_widget_area',
        'type' => 'checkbox',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_footer_column_layout',
	array(
	'default'           => $charity_nonprofit_default['charity_nonprofit_footer_column_layout'],
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'charity_nonprofit_sanitize_select',
	)
);
$wp_customize->add_control( 'charity_nonprofit_footer_column_layout',
	array(
	'label'       => esc_html__( 'Footer Column Layout', 'charity-nonprofit' ),
	'section'     => 'charity_nonprofit_footer_widget_area',
	'type'        => 'select',
	'choices'               => array(
		'1' => esc_html__( 'One Column', 'charity-nonprofit' ),
		'2' => esc_html__( 'Two Column', 'charity-nonprofit' ),
		'3' => esc_html__( 'Three Column', 'charity-nonprofit' ),
	    ),
	)
);

$wp_customize->add_setting( 'charity_nonprofit_footer_widget_title_alignment',
        array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_footer_widget_title_alignment'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'charity_nonprofit_sanitize_footer_widget_title_alignment',
    )
);
$wp_customize->add_control( 'charity_nonprofit_footer_widget_title_alignment',
    array(
    'label'       => esc_html__( 'Footer Widget Title Alignment', 'charity-nonprofit' ),
    'section'     => 'charity_nonprofit_footer_widget_area',
    'type'        => 'select',
    'choices'     => array(
        'left' => esc_html__( 'Left', 'charity-nonprofit' ),
        'center'  => esc_html__( 'Center', 'charity-nonprofit' ),
        'right'    => esc_html__( 'Right', 'charity-nonprofit' ),
        ),
    )
);

$wp_customize->add_setting( 'charity_nonprofit_footer_copyright_text',
	array(
	'default'           => $charity_nonprofit_default['charity_nonprofit_footer_copyright_text'],
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_text_field',
	)
);
$wp_customize->add_control( 'charity_nonprofit_footer_copyright_text',
	array(
	'label'    => esc_html__( 'Footer Copyright Text', 'charity-nonprofit' ),
	'section'  => 'charity_nonprofit_footer_widget_area',
	'type'     => 'text',
	)
);

$wp_customize->add_setting('charity_nonprofit_copyright_font_size',
    array(
        'default'           => $charity_nonprofit_default['charity_nonprofit_copyright_font_size'],
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_number_range',
    )
);
$wp_customize->add_control('charity_nonprofit_copyright_font_size',
    array(
        'label'       => esc_html__('Copyright Font Size', 'charity-nonprofit'),
        'section'     => 'charity_nonprofit_footer_widget_area',
        'type'        => 'number',
        'input_attrs' => array(
           'min'   => 5,
           'max'   => 30,
           'step'   => 1,
    	),
    )
);

$wp_customize->add_setting( 'charity_nonprofit_copyright_alignment', array(
    'default'           => 'Default',
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'charity_nonprofit_sanitize_copyright_alignment_meta',
) );

$wp_customize->add_control( 'charity_nonprofit_copyright_alignment', array(
    'label'    => esc_html__( 'Copyright Section Alignment', 'charity-nonprofit' ),
    'section'  => 'charity_nonprofit_footer_widget_area',
    'type'     => 'select',
    'choices'  => array(
        'Default' => esc_html__( 'Default View', 'charity-nonprofit' ),
        'Reverse' => esc_html__( 'Reverse View', 'charity-nonprofit' ),
        'Center'  => esc_html__( 'Centered Content', 'charity-nonprofit' ),
    ),
) );

$wp_customize->add_setting( 'charity_nonprofit_footer_widget_background_color', array(
    'default' => '',
    'sanitize_callback' => 'sanitize_hex_color'
));
$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'charity_nonprofit_footer_widget_background_color', array(
    'label'     => __('Footer Widget Background Color', 'charity-nonprofit'),
    'description' => __('It will change the complete footer widget background color.', 'charity-nonprofit'),
    'section' => 'charity_nonprofit_footer_widget_area',
    'settings' => 'charity_nonprofit_footer_widget_background_color',
)));

$wp_customize->add_setting('charity_nonprofit_footer_widget_background_image',array(
    'default'   => '',
    'sanitize_callback' => 'esc_url_raw',
));
$wp_customize->add_control( new WP_Customize_Image_Control($wp_customize,'charity_nonprofit_footer_widget_background_image',array(
    'label' => __('Footer Widget Background Image','charity-nonprofit'),
    'section' => 'charity_nonprofit_footer_widget_area'
)));

$wp_customize->add_setting('charity_nonprofit_enable_to_the_top',
    array(
        'default' => $charity_nonprofit_default['charity_nonprofit_enable_to_the_top'],
        'capability' => 'edit_theme_options',
        'sanitize_callback' => 'charity_nonprofit_sanitize_checkbox',
    )
);
$wp_customize->add_control('charity_nonprofit_enable_to_the_top',
    array(
        'label' => esc_html__('Enable To The Top', 'charity-nonprofit'),
        'section' => 'charity_nonprofit_footer_widget_area',
        'type' => 'checkbox',
    )
);

$wp_customize->add_setting( 'charity_nonprofit_to_the_top_text',
    array(
    'default'           => $charity_nonprofit_default['charity_nonprofit_to_the_top_text'],
    'capability'        => 'edit_theme_options',
    'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control( 'charity_nonprofit_to_the_top_text',
    array(
    'label'    => esc_html__( 'Edit Text Here', 'charity-nonprofit' ),
    'section'  => 'charity_nonprofit_footer_widget_area',
    'type'     => 'text',
    )
);