<?php
/**
 *
 * Pagination Functions
 *
 * @package Charity Nonprofit
 */

/**
 * Pagination for archive.
 */
function charity_nonprofit_render_posts_pagination() {
    // Get the setting to check if pagination is enabled
    $charity_nonprofit_is_pagination_enabled = get_theme_mod( 'charity_nonprofit_enable_pagination', true );

    // Check if pagination is enabled
    if ( $charity_nonprofit_is_pagination_enabled ) {
        // Get the selected pagination type from the Customizer
        $charity_nonprofit_pagination_type = get_theme_mod( 'charity_nonprofit_theme_pagination_type', 'numeric' );

        // Check if the pagination type is "newer_older" (Previous/Next) or "numeric"
        if ( 'newer_older' === $charity_nonprofit_pagination_type ) :
            // Display "Newer/Older" pagination (Previous/Next navigation)
            the_posts_navigation(
                array(
                    'prev_text' => __( '&laquo; Newer', 'charity-nonprofit' ),  // Change the label for "previous"
                    'next_text' => __( 'Older &raquo;', 'charity-nonprofit' ),  // Change the label for "next"
                    'screen_reader_text' => __( 'Posts navigation', 'charity-nonprofit' ),
                )
            );
        else :
            // Display numeric pagination (Page numbers)
            the_posts_pagination(
                array(
                    'prev_text' => __( '&laquo; Previous', 'charity-nonprofit' ),
                    'next_text' => __( 'Next &raquo;', 'charity-nonprofit' ),
                    'type'      => 'list', // Display as <ul> <li> tags
                    'screen_reader_text' => __( 'Posts navigation', 'charity-nonprofit' ),
                )
            );
        endif;
    }
}
add_action( 'charity_nonprofit_posts_pagination', 'charity_nonprofit_render_posts_pagination', 10 );