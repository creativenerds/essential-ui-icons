/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'essential-icons_Creative-Nerds\'">' + entity + '</span>' + html;
	}
	var icons = {
		'cn-alarm--icon': '&#xe900;',
		'cn-battery-2--icon': '&#xe901;',
		'cn-battery-3--icon': '&#xe902;',
		'cn-battery-full--icon': '&#xe903;',
		'cn-bulb--icon': '&#xe904;',
		'cn-business--icon': '&#xe905;',
		'cn-business--icon-1': '&#xe906;',
		'cn-calender--icon': '&#xe907;',
		'cn-camera--icon': '&#xe908;',
		'cn-cart--icon': '&#xe909;',
		'cn-cart--icon-1': '&#xe90a;',
		'cn-circle--icon': '&#xe90b;',
		'cn-clock--icon': '&#xe90c;',
		'cn-cross--icon': '&#xe90d;',
		'cn-cross--square--icon': '&#xe90e;',
		'cn-cut--icon': '&#xe90f;',
		'cn-disability--icon': '&#xe910;',
		'cn-film--icon': '&#xe911;',
		'cn-folded--icon': '&#xe912;',
		'cn-forward--icon': '&#xe913;',
		'cn-forward-square--icon': '&#xe914;',
		'cn-headphone--icon': '&#xe915;',
		'cn-headphone-plug--icon': '&#xe916;',
		'cn-headset--icon': '&#xe917;',
		'cn-heart--icon': '&#xe918;',
		'cn-heart-minus--icon': '&#xe919;',
		'cn-heart-plus--icon': '&#xe91a;',
		'cn-left-arrow-bubble': '&#xe91b;',
		'cn-location--icon': '&#xe91c;',
		'cn-lock--icon': '&#xe91d;',
		'cn-menu--icon': '&#xe91e;',
		'cn-menu-outline--icon': '&#xe91f;',
		'cn--message-block--icon': '&#xe920;',
		'cn-message-dots--icon': '&#xe921;',
		'cn-message--icon': '&#xe922;',
		'cn-message--outline': '&#xe923;',
		'cn-minus--icon': '&#xe924;',
		'cn-minus-square--icon': '&#xe925;',
		'cn-mobile--icon': '&#xe926;',
		'cn-mobile--icon-1': '&#xe927;',
		'cn-music--icon': '&#xe928;',
		'cn-mute--icon': '&#xe929;',
		'cn-mute--icon-1': '&#xe92a;',
		'cn-off--icon': '&#xe92b;',
		'cn-old-film--icon': '&#xe92c;',
		'cn--pause--icon': '&#xe92d;',
		'cn-pause-square--icon': '&#xe92e;',
		'cn-people--icon': '&#xe92f;',
		'cn-photo--icon': '&#xe930;',
		'cn-play--icon': '&#xe931;',
		'cn-play-square--icon': '&#xe932;',
		'cn-plus--icon': '&#xe933;',
		'cn-plus-square--icon': '&#xe934;',
		'cn-power--icon': '&#xe935;',
		'cn-profile--icon': '&#xe936;',
		'cn-redo--icon': '&#xe937;',
		'cn-repeat--icon': '&#xe938;',
		'cn-rewind--icon': '&#xe939;',
		'cn-rewind-square--icon': '&#xe93a;',
		'cn-right-arrow-bubble--icon': '&#xe93b;',
		'cn-search--icon': '&#xe93c;',
		'cn-search-minus-icon': '&#xe93d;',
		'cn-search-plus--icon': '&#xe93e;',
		'cn-setting-cogs--icon': '&#xe93f;',
		'cn-setting--icon': '&#xe940;',
		'cn-setting--icon-1': '&#xe941;',
		'cn-sound-down--icon': '&#xe942;',
		'cn-sound-up--icon': '&#xe943;',
		'cn-star--icon': '&#xe944;',
		'cn-star-minus--icon': '&#xe945;',
		'cn-star-outline--icon': '&#xe946;',
		'cn-star-plus--icon': '&#xe947;',
		'cn-stop--icon': '&#xe948;',
		'cn-stop-square--icon': '&#xe949;',
		'cn-tag--icon': '&#xe94a;',
		'cn-telephone--icon': '&#xe94b;',
		'cn-tick--icon': '&#xe94c;',
		'cn-tick-square--icon': '&#xe94d;',
		'cn-video--icon': '&#xe94e;',
		'cn-wfi--icon': '&#xe94f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
