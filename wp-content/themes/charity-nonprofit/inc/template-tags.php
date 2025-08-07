<?php
/**
 * Custom Functions
 * @package Charity Nonprofit
 * @since 1.0.0
 */

if( !function_exists('charity_nonprofit_site_logo') ):

    /**
     * Logo & Description
     */
    /**
     * Displays the site logo, either text or image.
     *
     * @param array $charity_nonprofit_args Arguments for displaying the site logo either as an image or text.
     * @param boolean $charity_nonprofit_echo Echo or return the HTML.
     *
     * @return string $charity_nonprofit_html Compiled HTML based on our arguments.
     */
    function charity_nonprofit_site_logo( $charity_nonprofit_args = array(), $charity_nonprofit_echo = true ){
        $charity_nonprofit_logo = get_custom_logo();
        $charity_nonprofit_site_title = get_bloginfo('name');
        $charity_nonprofit_contents = '';
        $charity_nonprofit_classname = '';
        $charity_nonprofit_defaults = array(
            'logo' => '%1$s<span class="screen-reader-text">%2$s</span>',
            'logo_class' => 'site-logo site-branding',
            'title' => '<a href="%1$s" class="custom-logo-name">%2$s</a>',
            'title_class' => 'site-title',
            'home_wrap' => '<h1 class="%1$s">%2$s</h1>',
            'single_wrap' => '<div class="%1$s">%2$s</div>',
            'condition' => (is_front_page() || is_home()) && !is_page(),
        );
        $charity_nonprofit_args = wp_parse_args($charity_nonprofit_args, $charity_nonprofit_defaults);
        /**
         * Filters the arguments for `charity_nonprofit_site_logo()`.
         *
         * @param array $charity_nonprofit_args Parsed arguments.
         * @param array $charity_nonprofit_defaults Function's default arguments.
         */
        $charity_nonprofit_args = apply_filters('charity_nonprofit_site_logo_args', $charity_nonprofit_args, $charity_nonprofit_defaults);
        
        $charity_nonprofit_show_logo  = get_theme_mod('charity_nonprofit_display_logo', false);
        $charity_nonprofit_show_title = get_theme_mod('charity_nonprofit_display_title', true);

        if ( has_custom_logo() && $charity_nonprofit_show_logo ) {
            $charity_nonprofit_contents .= sprintf($charity_nonprofit_args['logo'], $charity_nonprofit_logo, esc_html($charity_nonprofit_site_title));
            $charity_nonprofit_classname = $charity_nonprofit_args['logo_class'];
        }

        if ( $charity_nonprofit_show_title ) {
            $charity_nonprofit_contents .= sprintf($charity_nonprofit_args['title'], esc_url(get_home_url(null, '/')), esc_html($charity_nonprofit_site_title));
            // If logo isn't shown, fallback to title class for wrapper.
            if ( !$charity_nonprofit_show_logo ) {
                $charity_nonprofit_classname = $charity_nonprofit_args['title_class'];
            }
        }

        // If nothing is shown (logo or title both disabled), exit early
        if ( empty($charity_nonprofit_contents) ) {
            return;
        }

        $charity_nonprofit_wrap = $charity_nonprofit_args['condition'] ? 'home_wrap' : 'single_wrap';
        // $charity_nonprofit_wrap = 'home_wrap';
        $charity_nonprofit_html = sprintf($charity_nonprofit_args[$charity_nonprofit_wrap], $charity_nonprofit_classname, $charity_nonprofit_contents);
        /**
         * Filters the arguments for `charity_nonprofit_site_logo()`.
         *
         * @param string $charity_nonprofit_html Compiled html based on our arguments.
         * @param array $charity_nonprofit_args Parsed arguments.
         * @param string $charity_nonprofit_classname Class name based on current view, home or single.
         * @param string $charity_nonprofit_contents HTML for site title or logo.
         */
        $charity_nonprofit_html = apply_filters('charity_nonprofit_site_logo', $charity_nonprofit_html, $charity_nonprofit_args, $charity_nonprofit_classname, $charity_nonprofit_contents);
        if (!$charity_nonprofit_echo) {
            return $charity_nonprofit_html;
        }
        echo $charity_nonprofit_html; //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

    }

endif;

if( !function_exists('charity_nonprofit_site_description') ):

    /**
     * Displays the site description.
     *
     * @param boolean $charity_nonprofit_echo Echo or return the html.
     *
     * @return string $charity_nonprofit_html The HTML to display.
     */
    function charity_nonprofit_site_description($charity_nonprofit_echo = true){

        if ( get_theme_mod('charity_nonprofit_display_header_text', false) == true ) :
        $charity_nonprofit_description = get_bloginfo('description');
        if (!$charity_nonprofit_description) {
            return;
        }
        $charity_nonprofit_wrapper = '<div class="site-description"><span>%s</span></div><!-- .site-description -->';
        $charity_nonprofit_html = sprintf($charity_nonprofit_wrapper, esc_html($charity_nonprofit_description));
        /**
         * Filters the html for the site description.
         *
         * @param string $charity_nonprofit_html The HTML to display.
         * @param string $charity_nonprofit_description Site description via `bloginfo()`.
         * @param string $charity_nonprofit_wrapper The format used in case you want to reuse it in a `sprintf()`.
         * @since 1.0.0
         *
         */
        $charity_nonprofit_html = apply_filters('charity_nonprofit_site_description', $charity_nonprofit_html, $charity_nonprofit_description, $charity_nonprofit_wrapper);
        if (!$charity_nonprofit_echo) {
            return $charity_nonprofit_html;
        }
        echo $charity_nonprofit_html; //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        endif;
    }

endif;

if( !function_exists('charity_nonprofit_posted_on') ):

    /**
     * Prints HTML with meta information for the current post-date/time.
     */
    function charity_nonprofit_posted_on( $charity_nonprofit_icon = true, $animation_class = '' ){

        $charity_nonprofit_default = charity_nonprofit_get_default_theme_options();
        $charity_nonprofit_post_date = absint( get_theme_mod( 'charity_nonprofit_post_date',$charity_nonprofit_default['charity_nonprofit_post_date'] ) );

        if( $charity_nonprofit_post_date ){

            $charity_nonprofit_time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
            if (get_the_time('U') !== get_the_modified_time('U')) {
                $charity_nonprofit_time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
            }

            $charity_nonprofit_time_string = sprintf($charity_nonprofit_time_string,
                esc_attr(get_the_date(DATE_W3C)),
                esc_html(get_the_date()),
                esc_attr(get_the_modified_date(DATE_W3C)),
                esc_html(get_the_modified_date())
            );

            $charity_nonprofit_year = get_the_date('Y');
            $charity_nonprofit_month = get_the_date('m');
            $charity_nonprofit_day = get_the_date('d');
            $charity_nonprofit_link = get_day_link($charity_nonprofit_year, $charity_nonprofit_month, $charity_nonprofit_day);

            $charity_nonprofit_posted_on = '<a href="' . esc_url($charity_nonprofit_link) . '" rel="bookmark">' . $charity_nonprofit_time_string . '</a>';

            echo '<div class="entry-meta-item entry-meta-date">';
            echo '<div class="entry-meta-wrapper '.esc_attr( $animation_class ).'">';

            if( $charity_nonprofit_icon ){

                echo '<span class="entry-meta-icon calendar-icon"> ';
                charity_nonprofit_the_theme_svg('calendar');
                echo '</span>';

            }

            echo '<span class="posted-on">' . $charity_nonprofit_posted_on . '</span>'; // WPCS: XSS OK.
            echo '</div>';
            echo '</div>';

        }

    }

endif;

if( !function_exists('charity_nonprofit_posted_by') ) :

    /**
     * Prints HTML with meta information for the current author.
     */
    function charity_nonprofit_posted_by( $charity_nonprofit_icon = true, $animation_class = '' ){   

        $charity_nonprofit_default = charity_nonprofit_get_default_theme_options();
        $charity_nonprofit_post_author = absint( get_theme_mod( 'charity_nonprofit_post_author',$charity_nonprofit_default['charity_nonprofit_post_author'] ) );

        if( $charity_nonprofit_post_author ){

            echo '<div class="entry-meta-item entry-meta-author">';
            echo '<div class="entry-meta-wrapper '.esc_attr( $animation_class ).'">';

            if( $charity_nonprofit_icon ){
            
                echo '<span class="entry-meta-icon author-icon"> ';
                charity_nonprofit_the_theme_svg('user');
                echo '</span>';
                
            }

            $charity_nonprofit_byline = '<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta('ID') ) ) . '">' . esc_html(get_the_author()) . '</a></span>';
            echo '<span class="byline"> ' . $charity_nonprofit_byline . '</span>'; // WPCS: XSS OK.
            echo '</div>';
            echo '</div>';

        }

    }

endif;


if( !function_exists('charity_nonprofit_posted_by_avatar') ) :

    /**
     * Prints HTML with meta information for the current author.
     */
    function charity_nonprofit_posted_by_avatar( $charity_nonprofit_date = false ){

        $charity_nonprofit_default = charity_nonprofit_get_default_theme_options();
        $charity_nonprofit_post_author = absint( get_theme_mod( 'charity_nonprofit_post_author',$charity_nonprofit_default['charity_nonprofit_post_author'] ) );

        if( $charity_nonprofit_post_author ){



            echo '<div class="entry-meta-left">';
            echo '<div class="entry-meta-item entry-meta-avatar">';
            echo wp_kses_post( get_avatar( get_the_author_meta( 'ID' ) ) );
            echo '</div>';
            echo '</div>';

            echo '<div class="entry-meta-right">';

            $charity_nonprofit_byline = '<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta('ID') ) ) . '">' . esc_html(get_the_author()) . '</a></span>';

            echo '<div class="entry-meta-item entry-meta-byline"> ' . $charity_nonprofit_byline . '</div>';

            if( $charity_nonprofit_date ){
                charity_nonprofit_posted_on($charity_nonprofit_icon = false);
            }
            echo '</div>';

        }

    }

endif;

if( !function_exists('charity_nonprofit_entry_footer') ):

    /**
     * Prints HTML with meta information for the categories, tags and comments.
     */
    function charity_nonprofit_entry_footer( $charity_nonprofit_cats = true, $charity_nonprofit_tags = true, $charity_nonprofit_edits = true){   

        $charity_nonprofit_default = charity_nonprofit_get_default_theme_options();
        $charity_nonprofit_post_category = absint( get_theme_mod( 'charity_nonprofit_post_category',$charity_nonprofit_default['charity_nonprofit_post_category'] ) );
        $charity_nonprofit_post_tags = absint( get_theme_mod( 'charity_nonprofit_post_tags',$charity_nonprofit_default['charity_nonprofit_post_tags'] ) );

        // Hide category and tag text for pages.
        if ('post' === get_post_type()) {

            if( $charity_nonprofit_cats && $charity_nonprofit_post_category ){

                /* translators: used between list items, there is a space after the comma */
                $charity_nonprofit_categories = get_the_category();
                if ($charity_nonprofit_categories) {
                    echo '<div class="entry-meta-item entry-meta-categories">';
                    echo '<div class="entry-meta-wrapper">';
                
                    /* translators: 1: list of categories. */
                    echo '<span class="cat-links">';
                    foreach( $charity_nonprofit_categories as $charity_nonprofit_category ){

                        $charity_nonprofit_cat_name = $charity_nonprofit_category->name;
                        $charity_nonprofit_cat_slug = $charity_nonprofit_category->slug;
                        $charity_nonprofit_cat_url = get_category_link( $charity_nonprofit_category->term_id );
                        ?>

                        <a class="twp_cat_<?php echo esc_attr( $charity_nonprofit_cat_slug ); ?>" href="<?php echo esc_url( $charity_nonprofit_cat_url ); ?>" rel="category tag"><?php echo esc_html( $charity_nonprofit_cat_name ); ?></a>

                    <?php }
                    echo '</span>'; // WPCS: XSS OK.
                    echo '</div>';
                    echo '</div>';
                }

            }

            if( $charity_nonprofit_tags && $charity_nonprofit_post_tags ){
                /* translators: used between list items, there is a space after the comma */
                $charity_nonprofit_tags_list = get_the_tag_list('', esc_html_x(', ', 'list item separator', 'charity-nonprofit'));
                if( $charity_nonprofit_tags_list ){

                    echo '<div class="entry-meta-item entry-meta-tags">';
                    echo '<div class="entry-meta-wrapper">';

                    /* translators: 1: list of tags. */
                    echo '<span class="tags-links">';
                    echo wp_kses_post($charity_nonprofit_tags_list) . '</span>'; // WPCS: XSS OK.
                    echo '</div>';
                    echo '</div>';

                }

            }

            if( $charity_nonprofit_edits ){

                edit_post_link(
                    sprintf(
                        wp_kses(
                        /* translators: %s: Name of current post. Only visible to screen readers */
                            __('Edit <span class="screen-reader-text">%s</span>', 'charity-nonprofit'),
                            array(
                                'span' => array(
                                    'class' => array(),
                                ),
                            )
                        ),
                        get_the_title()
                    ),
                    '<span class="edit-link">',
                    '</span>'
                );
            }

        }
    }

endif;

if ( ! function_exists( 'charity_nonprofit_post_thumbnail' ) ) :

    /**
     * Displays an optional post thumbnail.
     *
     * Shows background style image with height class on archive/search/front,
     * and a normal inline image on single post/page views.
     */
    function charity_nonprofit_post_thumbnail( $charity_nonprofit_image_size = 'medium' ) {

        if ( post_password_required() || is_attachment() ) {
            return;
        }

        // Fallback image path
        $charity_nonprofit_default_image = get_template_directory_uri() . '/assets/images/default.png';

        // Image size → height class map
        $charity_nonprofit_size_class_map = array(
            'full'      => 'data-bg-large',
            'large'     => 'data-bg-big',
            'medium'    => 'data-bg-medium',
            'small'     => 'data-bg-small',
            'xsmall'    => 'data-bg-xsmall',
            'thumbnail' => 'data-bg-thumbnail',
        );

        $charity_nonprofit_class = isset( $charity_nonprofit_size_class_map[ $charity_nonprofit_image_size ] )
            ? $charity_nonprofit_size_class_map[ $charity_nonprofit_image_size ]
            : 'data-bg-medium';

        if ( is_singular() ) {
            the_post_thumbnail();
        } else {
            // 🔵 On archives → use background image style
            $charity_nonprofit_image = has_post_thumbnail()
                ? wp_get_attachment_image_src( get_post_thumbnail_id(), $charity_nonprofit_image_size )
                : array( $charity_nonprofit_default_image );

            $charity_nonprofit_bg_image = isset( $charity_nonprofit_image[0] ) ? $charity_nonprofit_image[0] : $charity_nonprofit_default_image;
            ?>
            <div class="post-thumbnail data-bg <?php echo esc_attr( $charity_nonprofit_class ); ?>"
                 data-background="<?php echo esc_url( $charity_nonprofit_bg_image ); ?>">
                <a href="<?php the_permalink(); ?>" class="theme-image-responsive" tabindex="0"></a>
            </div>
            <?php
        }
    }

endif;

if( !function_exists('charity_nonprofit_is_comment_by_post_author') ):

    /**
     * Comments
     */
    /**
     * Check if the specified comment is written by the author of the post commented on.
     *
     * @param object $charity_nonprofit_comment Comment data.
     *
     * @return bool
     */
    function charity_nonprofit_is_comment_by_post_author($charity_nonprofit_comment = null){

        if (is_object($charity_nonprofit_comment) && $charity_nonprofit_comment->user_id > 0) {
            $charity_nonprofit_user = get_userdata($charity_nonprofit_comment->user_id);
            $post = get_post($charity_nonprofit_comment->comment_post_ID);
            if (!empty($charity_nonprofit_user) && !empty($post)) {
                return $charity_nonprofit_comment->user_id === $post->post_author;
            }
        }
        return false;
    }

endif;

if( !function_exists('charity_nonprofit_breadcrumb') ) :

    /**
     * Charity Nonprofit Breadcrumb
     */
    function charity_nonprofit_breadcrumb($charity_nonprofit_comment = null){

        echo '<div class="entry-breadcrumb">';
        charity_nonprofit_breadcrumb_trail();
        echo '</div>';

    }

endif;