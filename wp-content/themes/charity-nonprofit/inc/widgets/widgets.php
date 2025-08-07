<?php
/**
* Widget Functions.
*
* @package Charity Nonprofit
*/

function charity_nonprofit_widgets_init(){

	register_sidebar(array(
	    'name' => esc_html__('Main Sidebar', 'charity-nonprofit'),
	    'id' => 'sidebar-1',
	    'description' => esc_html__('Add widgets here.', 'charity-nonprofit'),
	    'before_widget' => '<div id="%1$s" class="widget %2$s">',
	    'after_widget' => '</div>',
	    'before_title' => '<h3 class="widget-title"><span>',
	    'after_title' => '</span></h3>',
	));


    $charity_nonprofit_default = charity_nonprofit_get_default_theme_options();
    $charity_nonprofit_footer_column_layout = absint( get_theme_mod( 'charity_nonprofit_footer_column_layout',$charity_nonprofit_default['charity_nonprofit_footer_column_layout'] ) );

    for( $charity_nonprofit_i = 0; $charity_nonprofit_i < $charity_nonprofit_footer_column_layout; $charity_nonprofit_i++ ){
    	
    	if( $charity_nonprofit_i == 0 ){ $charity_nonprofit_count = esc_html__('One','charity-nonprofit'); }
    	if( $charity_nonprofit_i == 1 ){ $charity_nonprofit_count = esc_html__('Two','charity-nonprofit'); }
    	if( $charity_nonprofit_i == 2 ){ $charity_nonprofit_count = esc_html__('Three','charity-nonprofit'); }

	    register_sidebar( array(
	        'name' => esc_html__('Footer Widget ', 'charity-nonprofit').$charity_nonprofit_count,
	        'id' => 'charity-nonprofit-footer-widget-'.$charity_nonprofit_i,
	        'description' => esc_html__('Add widgets here.', 'charity-nonprofit'),
	        'before_widget' => '<div id="%1$s" class="widget %2$s">',
	        'after_widget' => '</div>',
	        'before_title' => '<h2 class="widget-title">',
	        'after_title' => '</h2>',
	    ));
	}

}

add_action('widgets_init', 'charity_nonprofit_widgets_init');