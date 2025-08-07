<?php
/**
 * Sample implementation of the Custom Header feature
 * @package Charity Nonprofit
 */

/**
 * Set up the WordPress core custom header feature.
 *
 * @uses charity_nonprofit_header_style()
 */
function charity_nonprofit_custom_header_setup()
{
    add_theme_support('custom-header',
        apply_filters('charity_nonprofit_custom_header_args', array(
            'default-image' => '',
            'default-text-color' => '000000',
            'width' => 1920,
            'height' => 400,
            'flex-height' => true,
            'flex-width' => true,
            'wp-head-callback' => 'charity_nonprofit_header_style',
        )));
}

add_action('after_setup_theme', 'charity_nonprofit_custom_header_setup');

if (!function_exists('charity_nonprofit_header_style')) :
    /**
     * Styles the header image and text displayed on the blog
     *
     * @see charity_nonprofit_custom_header_setup().
     */
    function charity_nonprofit_header_style()
    {
        $charity_nonprofit_header_text_color = get_header_textcolor();

        if (get_theme_support('custom-header', 'default-text-color') === $charity_nonprofit_header_text_color) {
            return;
        }

        ?>
        <style type="text/css">
            <?php
                if ( 'blank' == $charity_nonprofit_header_text_color ) :
            ?>
            .header-titles .custom-logo-name,
            .site-description {
                display: none;
                position: absolute;
                clip: rect(1px, 1px, 1px, 1px);
            }

            <?php
                else :
            ?>
            .header-titles .custom-logo-name:not(:hover):not(:focus),
            .site-description {
                color: #<?php echo esc_attr( $charity_nonprofit_header_text_color ); ?>;
            }

            <?php endif; ?>
        </style>
        <?php
    }
endif;