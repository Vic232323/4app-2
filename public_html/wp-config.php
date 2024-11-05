<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u255450453_cXtOF' );

/** Database username */
define( 'DB_USER', 'u255450453_gtYnC' );

/** Database password */
define( 'DB_PASSWORD', 'ttVEZibO9g' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

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
define( 'AUTH_KEY',          'LM<#Nlp:acQ1hShgy`Antk0SbfJ%^%Sd)LLf,{w^B&8?i/U63}1,y|?3n4mW>>Qq' );
define( 'SECURE_AUTH_KEY',   'B`s#bOk{{Yxx)6i#xoj>dQUf!taMNPY>l8me5NXe dqpX,G?Kqr-w`Pok*h47) 3' );
define( 'LOGGED_IN_KEY',     '0H`XuV_Cc2dXsSuJP/v].tl/S<zA5Zm*+EYTPF%=O`2KmT#l1B=>favhH;;Y@r&f' );
define( 'NONCE_KEY',         'wfq+1pB4O(X`TeA&@8D^..16M/u0o!IqJl4:?<G@D#(on//et!x$`k[Qn$Xp:jWc' );
define( 'AUTH_SALT',         '6G%$,_0/SL:{/Ny:WEd@Vug5q@~D-p,Q@`lb1q ,w9o$x;TM[ivG!<xq:!<L#^v8' );
define( 'SECURE_AUTH_SALT',  '9<2z?Hl#&?`G26MQ!tpfB89{DbTTNnO:5Ue}8CfW/1;6ycs|P@#aWPD(vt$zT;r5' );
define( 'LOGGED_IN_SALT',    'T%dVvZ6lYpgb/=aFG@M0b?_LB4)*07~=a71kE7sj|lVj1&Kr|N+vNzJ8J9g$iQ q' );
define( 'NONCE_SALT',        'g?%c:-$c-s+Gz=t.QNXGaf(&Pm6b0+{ma2ab wTZ5GUQn%}3TJy]<5ADN$@9H~%G' );
define( 'WP_CACHE_KEY_SALT', '#FI&^B#vh}XK?n ^)FC6XP|KJh%KLleu525*^hg&97K[uxockUrd8?`~ih58OLr:' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
