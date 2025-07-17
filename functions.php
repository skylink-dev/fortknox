<?php
/**
 * Recommended way to include parent theme styles.
 * (Please see http://codex.wordpress.org/Child_Themes#How_to_Create_a_Child_Theme)
 *
 */  

add_action( 'wp_enqueue_scripts', 'netlink_child_style' );
				function netlink_child_style() {
					wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
					wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style') );
				}

/**
 * Your code goes below.
 */

function force_utf8_encoding($buffer) {
    return mb_convert_encoding($buffer, 'UTF-8', 'auto');
}

function start_utf8_buffer() {
    ob_start('force_utf8_encoding');
}

function end_utf8_buffer() {
    ob_end_flush();
}

add_action('template_redirect', 'start_utf8_buffer');
add_action('shutdown', 'end_utf8_buffer');

function minify_html($buffer) {
    // Encode <script> and <style> content safely
	$buffer = preg_replace_callback(
		'#<(script|style)(.*?)>(.*?)</\1>#is',
		function ($matches) {
			$content = htmlspecialchars($matches[3], ENT_NOQUOTES, 'UTF-8');

			// Restore ₹ symbol
			$content = str_replace(['&#8377;', '&amp;#8377;', '&#x20B9;'], '₹', $content);

			return '<' . $matches[1] . $matches[2] . '>' . $content . '</' . $matches[1] . '>';
		},
		$buffer
	);

    // Minify HTML: remove extra spaces, newlines, and tabs
    $buffer = preg_replace(
        [
            '/\s{2,}/',      // Replace multiple spaces with single space
            '/>\s+</',       // Remove spaces between HTML tags
            '/[\n\r\t]+/',   // Remove newlines & tabs
        ],
        [' ', '><', ''],
        $buffer
    );

    // Decode <script> and <style> content back to original
    $buffer = preg_replace_callback(
        '#<(script|style)(.*?)>(.*?)</\1>#is',
        function ($matches) {
            return '<' . $matches[1] . $matches[2] . '>' . htmlspecialchars_decode($matches[3], ENT_NOQUOTES, 'UTF-8') . '</' . $matches[1] . '>';
        },
        $buffer
    );

    return $buffer;
}


function start_html_minify() {
    ob_start('minify_html_output');
}

function end_html_minify() {
    ob_end_flush();
}

add_action('get_header', 'start_html_minify');
add_action('wp_footer', 'end_html_minify');

function disable_inspect_element() {
	  if (!is_admin() && !current_user_can('manage_options')) {
	?>
 <script>
         document.addEventListener('contextmenu', event => event.preventDefault());
        document.addEventListener('keydown', event => {
             if (event.keyCode == 123) {
                 event.preventDefault();
             }
             if (event.ctrlKey && event.shiftKey && (event.keyCode == 73 || event.keyCode == 74)) {
                event.preventDefault();
            }
             if (event.ctrlKey && event.keyCode == 85) {
                 event.preventDefault();
             }
             if (event.ctrlKey && event.shiftKey && event.keyCode == 67) {
                 event.preventDefault();
             }
         });
</script>
<?php 
    }
}
add_action('wp_footer', 'disable_inspect_element');

function enqueue_dashicons() {
    wp_enqueue_style('dashicons');
}
add_action('wp_enqueue_scripts', 'enqueue_dashicons');

function add_google_tag_manager_script() {
    $gtm_id = 'GTM-KHVMSLC8'; // Replace with your GTM ID
    ?>
	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','<?php echo $gtm_id; ?>');</script>
	<!-- End Google Tag Manager -->
    <?php
}
add_action('wp_head', 'add_google_tag_manager_script');

function add_google_tag_manager_noscript() {
    $gtm_id = 'GTM-KHVMSLC8';
    ?>
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=<?php echo $gtm_id; ?>"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <?php
}
add_action('wp_body_open', 'add_google_tag_manager_noscript');