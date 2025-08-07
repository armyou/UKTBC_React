<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('FS_METHOD','direct');
define('WP_MEMORY_LIMIT','256M');
set_time_limit(300);



define( 'DB_NAME', 'uktbc_wordpress' );

/** Database username */
define( 'DB_USER', 'uktbcadmin' );

/** Database password */
define( 'DB_PASSWORD', 'uktbc_admin123' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '7}1!pfIn:fRE6kF{*o:SRh61S]e61qK`BoW2?ob}fD~HaKv1DG,wPj*@t%?HdX7e' );
define( 'SECURE_AUTH_KEY',  'PMb>3KD~:2ry?7 Rd;P#>,kk5J!Sy&5Iz~mypbk&RxY6P2Sk~IU|XSV4Tw7z=cC5' );
define( 'LOGGED_IN_KEY',    '8Q[{yP^4kD;DxCcbQn-:+704?OG!isHJj :h&fIUki4j)Kzu2$j>e0s<)y]0o=9{' );
define( 'NONCE_KEY',        '<R0(y34 UBn=<rZQnINP_bR%{lH5XDKK<3f`R{!cr/GBgP1#xLU6oYLN;l59mYpK' );
define( 'AUTH_SALT',        '$8u)rg!2~8{/K<aBrE)xxl{SB;o|b^r|XpuWMU0`pw}6VjxE5v4L!$)vQ^(4/@OE' );
define( 'SECURE_AUTH_SALT', 'vfwbS=al*-x0ts:p91@Z,xYowu[h(E7I2xDC?):{<9^6&c!]<`L{l6}u:StF#@MG' );
define( 'LOGGED_IN_SALT',   'U%%BoZO_(7]%m0~=luY{nDX/X Z*g.!!()L)i{z#8 lrIB0H5|=?;mZ-(1_(Zh}j' );
define( 'NONCE_SALT',       '/M:[Ui;c5R46Qs1;Ho4H1|gNi[5r1k>?0mrTPKn|qGrd}|]%Bpu}~d3|zeB[8K:6' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
