<?php
/**
 * Custom page walker for this theme.
 *
 * @package Charity Nonprofit
 */

if (!class_exists('Charity_Nonprofit_Walker_Page')) {
    /**
     * CUSTOM PAGE WALKER
     * A custom walker for pages.
     */
    class Charity_Nonprofit_Walker_Page extends Walker_Page
    {

        /**
         * Outputs the beginning of the current element in the tree.
         *
         * @param string $charity_nonprofit_output Used to append additional content. Passed by reference.
         * @param WP_Post $page Page data object.
         * @param int $charity_nonprofit_depth Optional. Depth of page. Used for padding. Default 0.
         * @param array $charity_nonprofit_args Optional. Array of arguments. Default empty array.
         * @param int $current_page Optional. Page ID. Default 0.
         * @since 2.1.0
         *
         * @see Walker::start_el()
         */

        public function start_lvl( &$charity_nonprofit_output, $charity_nonprofit_depth = 0, $charity_nonprofit_args = array() ) {
            $charity_nonprofit_indent  = str_repeat( "\t", $charity_nonprofit_depth );
            $charity_nonprofit_output .= "$charity_nonprofit_indent<ul class='sub-menu'>\n";
        }

        public function start_el(&$charity_nonprofit_output, $page, $charity_nonprofit_depth = 0, $charity_nonprofit_args = array(), $current_page = 0)
        {

            if (isset($charity_nonprofit_args['item_spacing']) && 'preserve' === $charity_nonprofit_args['item_spacing']) {
                $t = "\t";
                $n = "\n";
            } else {
                $t = '';
                $n = '';
            }
            if ($charity_nonprofit_depth) {
                $charity_nonprofit_indent = str_repeat($t, $charity_nonprofit_depth);
            } else {
                $charity_nonprofit_indent = '';
            }

            $charity_nonprofit_css_class = array('page_item', 'page-item-' . $page->ID);

            if (isset($charity_nonprofit_args['pages_with_children'][$page->ID])) {
                $charity_nonprofit_css_class[] = 'page_item_has_children';
            }

            if (!empty($current_page)) {
                $_current_page = get_post($current_page);
                if ($_current_page && in_array($page->ID, $_current_page->ancestors, true)) {
                    $charity_nonprofit_css_class[] = 'current_page_ancestor';
                }
                if ($page->ID === $current_page) {
                    $charity_nonprofit_css_class[] = 'current_page_item';
                } elseif ($_current_page && $page->ID === $_current_page->post_parent) {
                    $charity_nonprofit_css_class[] = 'current_page_parent';
                }
            } elseif (get_option('page_for_posts') === $page->ID) {
                $charity_nonprofit_css_class[] = 'current_page_parent';
            }

            /** This filter is documented in wp-includes/class-walker-page.php */
            $charity_nonprofit_css_classes = implode(' ', apply_filters('page_css_class', $charity_nonprofit_css_class, $page, $charity_nonprofit_depth, $charity_nonprofit_args, $current_page));
            $charity_nonprofit_css_classes = $charity_nonprofit_css_classes ? ' class="' . esc_attr($charity_nonprofit_css_classes) . '"' : '';

            if ('' === $page->post_title) {
                /* translators: %d: ID of a post. */
                $page->post_title = sprintf(__('#%d (no title)', 'charity-nonprofit'), $page->ID);
            }

            $charity_nonprofit_args['link_before'] = empty($charity_nonprofit_args['link_before']) ? '' : $charity_nonprofit_args['link_before'];
            $charity_nonprofit_args['link_after'] = empty($charity_nonprofit_args['link_after']) ? '' : $charity_nonprofit_args['link_after'];

            $charity_nonprofit_atts = array();
            $charity_nonprofit_atts['href'] = get_permalink($page->ID);
            $charity_nonprofit_atts['aria-current'] = ($page->ID === $current_page) ? 'page' : '';

            /** This filter is documented in wp-includes/class-walker-page.php */
            $charity_nonprofit_atts = apply_filters('page_menu_link_attributes', $charity_nonprofit_atts, $page, $charity_nonprofit_depth, $charity_nonprofit_args, $current_page);

            $charity_nonprofit_attributes = '';
            foreach ($charity_nonprofit_atts as $attr => $charity_nonprofit_value) {
                if (!empty($charity_nonprofit_value)) {
                    $charity_nonprofit_value = ('href' === $attr) ? esc_url($charity_nonprofit_value) : esc_attr($charity_nonprofit_value);
                    $charity_nonprofit_attributes .= ' ' . $attr . '="' . $charity_nonprofit_value . '"';
                }
            }

            $charity_nonprofit_args['list_item_before'] = '';
            $charity_nonprofit_args['list_item_after'] = '';
            $charity_nonprofit_args['icon_rennder'] = '';
            // Wrap the link in a div and append a sub menu toggle.
            if (isset($charity_nonprofit_args['show_toggles']) && true === $charity_nonprofit_args['show_toggles']) {
                // Wrap the menu item link contents in a div, used for positioning.
                $charity_nonprofit_args['list_item_after'] = '';
            }


            // Add icons to menu items with children.
            if (isset($charity_nonprofit_args['show_sub_menu_icons']) && true === $charity_nonprofit_args['show_sub_menu_icons']) {
                if (isset($charity_nonprofit_args['pages_with_children'][$page->ID])) {
                    $charity_nonprofit_args['icon_rennder'] = '';
                }
            }

            // Add icons to menu items with children.
            if (isset($charity_nonprofit_args['show_toggles']) && true === $charity_nonprofit_args['show_toggles']) {
                if (isset($charity_nonprofit_args['pages_with_children'][$page->ID])) {

                    $toggle_target_string = '.page_item.page-item-' . $page->ID . ' > .sub-menu';

                    $charity_nonprofit_args['list_item_after'] = '<button type="button" class="theme-aria-button submenu-toggle" data-toggle-target="' . $toggle_target_string . '" data-toggle-type="slidetoggle" data-toggle-duration="250"><span class="btn__content" tabindex="-1"><span class="screen-reader-text">' . __( 'Show sub menu', 'charity-nonprofit' ) . '</span>' . charity_nonprofit_get_theme_svg( 'chevron-down' ) . '</span></button>';
                }
            }

            if (isset($charity_nonprofit_args['show_toggles']) && true === $charity_nonprofit_args['show_toggles']) {

                $charity_nonprofit_output .= $charity_nonprofit_indent . sprintf(
                        '<li%s>%s%s<a%s>%s%s%s</a>%s%s',
                        $charity_nonprofit_css_classes,
                        '<div class="submenu-wrapper">',
                        $charity_nonprofit_args['list_item_before'],
                        $charity_nonprofit_attributes,
                        $charity_nonprofit_args['link_before'],
                        /** This filter is documented in wp-includes/post-template.php */
                        apply_filters('the_title', $page->post_title, $page->ID),
                        $charity_nonprofit_args['link_after'],
                        $charity_nonprofit_args['list_item_after'],
                        '</div>'
                    );

            }else{

                $charity_nonprofit_output .= $charity_nonprofit_indent . sprintf(
                        '<li%s>%s<a%s>%s%s%s%s</a>%s',
                        $charity_nonprofit_css_classes,
                        $charity_nonprofit_args['list_item_before'],
                        $charity_nonprofit_attributes,
                        $charity_nonprofit_args['link_before'],
                        /** This filter is documented in wp-includes/post-template.php */
                        apply_filters('the_title', $page->post_title, $page->ID),
                        $charity_nonprofit_args['icon_rennder'],
                        $charity_nonprofit_args['link_after'],
                        $charity_nonprofit_args['list_item_after']
                    );

            }

            if (!empty($charity_nonprofit_args['show_date'])) {
                if ('modified' === $charity_nonprofit_args['show_date']) {
                    $charity_nonprofit_time = $page->post_modified;
                } else {
                    $charity_nonprofit_time = $page->post_date;
                }

                $charity_nonprofit_date_format = empty($charity_nonprofit_args['date_format']) ? '' : $charity_nonprofit_args['date_format'];
                $charity_nonprofit_output .= ' ' . mysql2date($charity_nonprofit_date_format, $charity_nonprofit_time);
            }
        }
    }
}