<?php
/**
 * The template for displaying single posts and pages.
 * @package Charity Nonprofit
 * @since 1.0.0
 */

get_header();

$charity_nonprofit_default = charity_nonprofit_get_default_theme_options();
$charity_nonprofit_global_layout = get_theme_mod('charity_nonprofit_global_sidebar_layout', $charity_nonprofit_default['charity_nonprofit_global_sidebar_layout']);
$charity_nonprofit_page_layout = get_theme_mod('charity_nonprofit_page_sidebar_layout', $charity_nonprofit_global_layout);
$charity_nonprofit_post_layout = get_theme_mod('charity_nonprofit_post_sidebar_layout', $charity_nonprofit_global_layout);
$charity_nonprofit_post_meta = get_post_meta(get_the_ID(), 'charity_nonprofit_post_sidebar_option', true);

$charity_nonprofit_final_layout = $charity_nonprofit_global_layout;
if (!empty($charity_nonprofit_post_meta) && $charity_nonprofit_post_meta !== 'default') {
    $charity_nonprofit_final_layout = $charity_nonprofit_post_meta;
} elseif (is_page() || (function_exists('is_shop') && is_shop())) {
    $charity_nonprofit_final_layout = $charity_nonprofit_page_layout;
} elseif (is_single()) {
    $charity_nonprofit_final_layout = $charity_nonprofit_post_layout;
}

// Set content column order based on sidebar layout
$charity_nonprofit_sidebar_column_class = 'column-order-1';
if ($charity_nonprofit_final_layout === 'left-sidebar') {
    $charity_nonprofit_sidebar_column_class = 'column-order-2';
}

?>

<div id="single-page" class="singular-main-block">
    <div class="wrapper">
        <div class="column-row <?php echo esc_attr($charity_nonprofit_final_layout === 'no-sidebar' ? 'no-sidebar-layout' : ''); ?>">

            <?php if ($charity_nonprofit_final_layout === 'left-sidebar') : ?>
                <?php get_sidebar(); ?>
            <?php endif; ?>

            <div id="primary" class="content-area <?php echo esc_attr($charity_nonprofit_final_layout === 'no-sidebar' ? 'full-width-content' : $charity_nonprofit_sidebar_column_class); ?>">
                <main id="site-content" role="main">

                    <?php
                    charity_nonprofit_breadcrumb(); // Display breadcrumb

                    if (have_posts()) : ?>

                        <div class="article-wraper">
                            <?php while (have_posts()) : the_post(); ?>

                                <?php get_template_part('template-parts/content', 'single'); ?>

                                <?php if ((is_single() || is_page()) && (comments_open() || get_comments_number()) && !post_password_required()) : ?>
                                    <div class="comments-wrapper">
                                        <?php comments_template(); ?>
                                    </div>
                                <?php endif; ?>

                            <?php endwhile; ?>
                        </div>

                    <?php else : ?>

                        <?php get_template_part('template-parts/content', 'none'); ?>

                    <?php endif;

                    do_action('charity_nonprofit_navigation_action');
                    ?>

                </main>
            </div>

            <?php if ($charity_nonprofit_final_layout === 'right-sidebar') : ?>
                <?php get_sidebar(); ?>
            <?php endif; ?>

        </div>
    </div>
</div>

<?php get_footer(); ?>