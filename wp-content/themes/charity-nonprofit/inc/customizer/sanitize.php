<?php
/**
* Custom Functions.
*
* @package Charity Nonprofit
*/

if( !function_exists( 'charity_nonprofit_sanitize_sidebar_option' ) ) :

    // Sidebar Option Sanitize.
    function charity_nonprofit_sanitize_sidebar_option( $charity_nonprofit_input ){

        $charity_nonprofit_metabox_options = array( 'global-sidebar','left-sidebar','right-sidebar','no-sidebar' );
        if( in_array( $charity_nonprofit_input,$charity_nonprofit_metabox_options ) ){

            return $charity_nonprofit_input;

        }

        return;

    }

endif;

if ( ! function_exists( 'charity_nonprofit_sanitize_checkbox' ) ) :

	/**
	 * Sanitize checkbox.
	 */
	function charity_nonprofit_sanitize_checkbox( $charity_nonprofit_checked ) {

		return ( ( isset( $charity_nonprofit_checked ) && true === $charity_nonprofit_checked ) ? true : false );

	}

endif;


if ( ! function_exists( 'charity_nonprofit_sanitize_select' ) ) :

    /**
     * Sanitize select.
     */
    function charity_nonprofit_sanitize_select( $charity_nonprofit_input, $charity_nonprofit_setting ) {
        $charity_nonprofit_input = sanitize_text_field( $charity_nonprofit_input );
        $choices = $charity_nonprofit_setting->manager->get_control( $charity_nonprofit_setting->id )->choices;
        return ( array_key_exists( $charity_nonprofit_input, $choices ) ? $charity_nonprofit_input : $charity_nonprofit_setting->default );
    }

endif;

/*Radio Button sanitization*/
function charity_nonprofit_sanitize_choices( $input, $setting ) {
    global $wp_customize;
    $control = $wp_customize->get_control( $setting->id );
    if ( array_key_exists( $input, $control->choices ) ) {
        return $input;
    } else {
        return $setting->default;
    }
}