/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon_rainy' : '&#x21;',
			'icon_code' : '&#x22;',
			'icon_wrench' : '&#x23;',
			'icon_search' : '&#x24;',
			'icon_location' : '&#x25;',
			'icon_warning' : '&#x26;',
			'icon_umbrella' : '&#x27;',
			'icon_feed' : '&#x28;',
			'icon_twitter' : '&#x2a;',
			'icon_android' : '&#x2b;',
			'icon_road' : '&#x2c;',
			'icon_airplane' : '&#x2d;',
			'icon_accessibility' : '&#x2e;',
			'icon_home' : '&#x2f;',
			'icon_mobile' : '&#x30;',
			'icon_screen' : '&#x31;',
			'icon_lock' : '&#x32;',
			'icon_flag' : '&#x33;',
			'icon_hammer' : '&#x34;',
			'icon_aid' : '&#x35;',
			'icon_cogs' : '&#x36;',
			'icon_bubbles' : '&#x37;',
			'icon_user' : '&#x38;',
			'icon_phone' : '&#x39;',
			'icon_library' : '&#x3a;',
			'icon_paste' : '&#x3b;',
			'icon_plus' : '&#x3c;',
			'icon_minus' : '&#x3d;',
			'icon_checkmark' : '&#x3e;',
			'icon_close' : '&#x3f;',
			'icon_lab' : '&#x40;',
			'icon_cart' : '&#x41;',
			'icon_credit' : '&#x42;',
			'icon_location-2' : '&#x43;',
			'icon_compass' : '&#x44;',
			'icon_user-2' : '&#x45;',
			'icon_users' : '&#x46;',
			'icon_youtube' : '&#x47;',
			'icon_facebook' : '&#x49;',
			'icon_signup' : '&#x29;',
			'icon_h-sign' : '&#xf0fd;',
			'icon_ambulance' : '&#xf0f9;',
			'icon_comment' : '&#xf075;',
			'icon_envelope-alt' : '&#xf0e0;',
			'icon_html5' : '&#xe000;',
			'icon_css3' : '&#xe001;',
			'icon_file-xml' : '&#xe002;',
			'icon_code-2' : '&#xe003;',
			'icon_console' : '&#xe004;',
			'icon_github' : '&#xe005;',
			'icon_intersection' : '&#x2229;',
			'icon_uniF488' : '&#xf488;',
			'icon_uniF489' : '&#xf489;',
			'icon_desklamp' : '&#xf412;',
			'icon_thissideup' : '&#xf41d;',
			'icon_firefox' : '&#xf420;',
			'icon_microwave' : '&#xf42e;',
			'icon_nintendods' : '&#xf404;',
			'icon_apple' : '&#xf34e;',
			'icon_spaceinvaders' : '&#xf352;',
			'icon_danger' : '&#xf415;',
			'icon_oneup' : '&#xf3b7;',
			'icon_reliability' : '&#xf016;',
			'icon_email' : '&#xf028;',
			'icon_html5-2' : '&#xf069;',
			'icon_css3-2' : '&#xf06a;',
			'icon_jqueryui' : '&#xf06c;',
			'icon_wordpress' : '&#xf074;',
			'icon_html' : '&#xf068;',
			'icon_jquery' : '&#xf06b;',
			'icon_joomla' : '&#xf073;',
			'icon_github-2' : '&#xf081;',
			'icon_braces' : '&#xf0b4;',
			'icon_chevrons' : '&#xf0b5;',
			'icon_vinyl' : '&#xf0cc;',
			'icon_chrome' : '&#xf14e;',
			'icon_linkedin' : '&#xf166;',
			'icon_twitter-2' : '&#xf16a;',
			'icon_photoshop' : '&#xf1cd;',
			'icon_illustrator' : '&#xf1ce;',
			'icon_tent' : '&#xf215;',
			'icon_roadsign' : '&#xf21b;',
			'icon_glasses' : '&#xf295;',
			'icon_controllerps' : '&#xf2d1;',
			'icon_github-sign' : '&#xf092;',
			'icon_trophy' : '&#xf091;',
			'icon_apple-2' : '&#xe006;',
			'icon_windows' : '&#xe008;',
			'icon_lastfm' : '&#xe007;',
			'icon_IE' : '&#xe009;',
			'icon_safari' : '&#xe00a;',
			'icon_opera' : '&#xe00b;',
			'icon_firefox-2' : '&#xe00c;',
			'icon_chrome-2' : '&#xe00d;',
			'icon_file-pdf' : '&#xe00e;',
			'icon_file-word' : '&#xe00f;',
			'icon_file-excel' : '&#xe010;',
			'icon_hospital' : '&#xf247;',
			'icon_bread' : '&#xf42f;',
			'icon_soccer' : '&#xe011;',
			'icon_library-2' : '&#xe012;',
			'icon_graduate' : '&#xe013;',
			'icon_office' : '&#xe014;',
			'icon_briefcase' : '&#xe015;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon_[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};