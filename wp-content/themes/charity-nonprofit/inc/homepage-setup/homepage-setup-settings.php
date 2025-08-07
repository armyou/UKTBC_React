<?php
/**
 * Settings for demo import
 *
 */

/**
 * Define constants
 **/
if ( ! defined( 'WHIZZIE_DIR' ) ) {
	define( 'WHIZZIE_DIR', dirname( __FILE__ ) );
}
require trailingslashit( WHIZZIE_DIR ) . 'homepage-setup-contents.php';
$charity_nonprofit_current_theme = wp_get_theme();
$charity_nonprofit_theme_title = $charity_nonprofit_current_theme->get( 'Name' );


/**
 * Make changes below
 **/

// Change the title and slug of your wizard page
$config['charity_nonprofit_page_slug'] 	= 'charity-nonprofit';
$config['charity_nonprofit_page_title']	= 'Homepage Setup';

$config['steps'] = array(
	'widgets' => array(
		'id'			=> 'widgets',
		'title'			=> __( 'Setup Home Page', 'charity-nonprofit' ),
		'icon'			=> 'welcome-widgets-menus',
		'button_text'	=> __( 'Start Home Page Setup', 'charity-nonprofit' ),
		'can_skip'		=> true
	),
	'done' => array(
		'id'			=> 'done',
		'title'			=> __( 'Customize Your Site', 'charity-nonprofit' ),
		'icon'			=> 'yes',
	)
);

/**
 * This kicks off the wizard
 **/
if( class_exists( 'Charity_Nonprofit_Whizzie' ) ) {
	$Charity_Nonprofit_Whizzie = new Charity_Nonprofit_Whizzie( $config );
}