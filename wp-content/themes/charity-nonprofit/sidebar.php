<?php
$charity_nonprofit_layout = charity_nonprofit_get_final_sidebar_layout();
$charity_nonprofit_sidebar_class = 'column-order-1';

if ( $charity_nonprofit_layout === 'left-sidebar' ) {
    $charity_nonprofit_sidebar_class = 'column-order-1';
} elseif ( $charity_nonprofit_layout === 'right-sidebar' ) {
    $charity_nonprofit_sidebar_class = 'column-order-2';
}

if ( $charity_nonprofit_layout !== 'no-sidebar' ) : ?>
    <aside id="secondary" class="widget-area <?php echo esc_attr( $charity_nonprofit_sidebar_class ); ?>">
        <div class="widget-area-wrapper">
            <?php if ( is_active_sidebar('sidebar-1') ) : ?>
                <?php dynamic_sidebar( 'sidebar-1' ); ?>
            <?php else : ?>
                <!-- Default widgets -->
                <div class="widget widget_block widget_search">
                    <h3 class="widget-title"><?php esc_html_e('Search', 'charity-nonprofit'); ?></h3>
                    <?php get_search_form(); ?>
                </div>

                <div class="widget widget_pages">
                    <h3 class="widget-title"><?php esc_html_e('Pages', 'charity-nonprofit'); ?></h3>
                    <ul>
                        <?php
                        wp_list_pages(array(
                            'title_li' => '',
                        ));
                        ?>
                    </ul>
                </div>

                <div class="widget widget_archive">
                    <h3 class="widget-title"><?php esc_html_e('Archives', 'charity-nonprofit'); ?></h3>
                    <ul>
                        <?php wp_get_archives(['type' => 'monthly', 'show_post_count' => true]); ?>
                    </ul>
                </div>

                <div class="widget widget_categories">
                    <h3 class="widget-title"><?php esc_html_e('Categories', 'charity-nonprofit'); ?></h3>
                    <ul class="wp-block-categories-list wp-block-categories">
                        <?php wp_list_categories(['orderby' => 'name', 'title_li' => '', 'show_count' => true]); ?>
                    </ul>
                </div>

                <div class="widget widget_tag_cloud">
                    <h3 class="widget-title"><?php esc_html_e('Tags', 'charity-nonprofit'); ?></h3>
                    <?php
                    $charity_nonprofit_tags = get_tags();
                    if ( $charity_nonprofit_tags ) {
                        echo '<div class="tagcloud">';
                        foreach ( $charity_nonprofit_tags as $charity_nonprofit_tag ) {
                            $charity_nonprofit_link = get_tag_link($charity_nonprofit_tag->term_id);
                            echo '<a href="' . esc_url($charity_nonprofit_link) . '" class="tag-cloud-link">' . esc_html($charity_nonprofit_tag->name) . '</a> ';
                        }
                        echo '</div>';
                    } else {
                        echo '<p>' . esc_html__('No tags found.', 'charity-nonprofit') . '</p>';
                    }
                    ?>
                </div>

            <?php endif; ?>
        </div>
    </aside>
<?php endif; ?>
