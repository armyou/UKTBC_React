<?php
/**
 * The template for displaying the footer
 * @package Charity Nonprofit
 * @since 1.0.0
 */

/**
 * Toogle Contents
 * @hooked charity_nonprofit_content_offcanvas - 30
*/

do_action('charity_nonprofit_before_footer_content_action'); ?>

</div>

<footer id="site-footer" role="contentinfo">

    <?php
    /**
     * Footer Content
     * @hooked charity_nonprofit_footer_content_widget - 10
     * @hooked charity_nonprofit_footer_content_info - 20
    */

    do_action('charity_nonprofit_footer_content_action'); ?>

</footer>
</div>
<?php wp_footer(); ?>
</body>
</html>