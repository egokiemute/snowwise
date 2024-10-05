/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Wow Js
03. Common Js
04. back-to-top Js
05. Smooth Scroll Js
06. Nice Select Js
07. Mobile Menu Js
08. Offcanvas Js
09. Body overlay Js
10. Sticky Header Js
11. magnificPopup img view
12. Counter Js
13. for header lang
14. header-search-class-active
15. price toggle animation
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);

	// 01. PreLoader Js//
	windowOn.on('load', function () {
		$("#loading").fadeOut(1000);
	});

	// 02. Wow Js//
	new WOW().init();

	// 03. Common Js//
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-text-color]").each(function () {
		$(this).css("color", $(this).attr("data-text-color"));
	});

	// 04. back-to-top Js//
	function back_to_top() {
		var btn = $('#back_to_top');
		var btn_wrapper = $('.back-to-top-wrapper');

		windowOn.scroll(function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();


	// 05. Smooth Scroll Js
	function smoothSctoll() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 120
				}, 1500);
			}
		});
	}
	smoothSctoll();

	// 06. Nice Select Js//
	$('select').niceSelect();


  if ($('.grid').length != 0) {  
		var $grid = $('.grid').imagesLoaded( function() {
		  $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
			  columnWidth: 1
			}
		  })
  
		// filter items on button click
		$('.tp-portfolio-filter').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
		  //for menu active class
		  $('.tp-portfolio-filter button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		  });
		});
	}

	// 07. Mobile Menu Js
	var tpMenuWrap = $('.tp-mobile-menu-active > ul').clone();
	var tpSideMenu = $('.tp-offcanvas-menu nav');
	tpSideMenu.append(tpMenuWrap);
	if ($(tpSideMenu).find('.tp-submenu, .tp-mega-menu').length != 0) {
		$(tpSideMenu).find('.tp-submenu, .tp-mega-menu').parent().append('<button class="tp-menu-close"><i class="fas fa-chevron-right"></i></button>');
	}

	var sideMenuList = $('.tp-offcanvas-menu nav > ul > li button.tp-menu-close, .tp-offcanvas-menu nav > ul li.has-dropdown > a');
	$(sideMenuList).on('click', function (e) {
		e.preventDefault();
		if (!($(this).parent().hasClass('active'))) {
			$(this).parent().addClass('active');
			$(this).siblings('.tp-submenu, .tp-mega-menu').slideDown();
		} else {
			$(this).siblings('.tp-submenu, .tp-mega-menu').slideUp();
			$(this).parent().removeClass('active');
		}
	});


	// 08. Offcanvas Js
	$(".offcanvas-open-btn").on("click", function () {
		$(".offcanvas__area").addClass("offcanvas-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".offcanvas-close-btn ,.tp-main-menu-mobile .tp-onepage-menu li a  > *:not(button)").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});


	// 09. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".tp-search-area").removeClass("opened");
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".body-overlay").removeClass("opened");
	});

	// 10. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 20) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});


	// 11. magnificPopup img view //
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	// 12. Counter Js //
	new PureCounter();
	new PureCounter({
		filesizing: true,
		selector: ".filesizecount",
		pulse: 2,
	});
	
	// 13. for header lang //
	if ($("#tp-header-lang-toggle").length > 0) {
		window.addEventListener('click', function(e){
	
			if (document.getElementById('tp-header-lang-toggle').contains(e.target)){
				$(".tp-lang-list").toggleClass("tp-lang-list-open");
			}
			else{
				$(".tp-lang-list").removeClass("tp-lang-list-open");
			}
		});
	}

	// 14. header-search-class-active
	if ($("#tp-header-3-search").length > 0) {
		window.addEventListener('click', function(e){
			if (document.getElementById('tp-header-3-search').contains(e.target)){
				$(".tp-header-3-search-input").toggleClass("active");
			}
			else{
				$(".tp-header-3-search-input").removeClass("active");
			}
		});
	}

	// 15. price toggle animation
	function tabtable_active_1() {
		const $elements = {
			monthly: $("#tp-nav-monthly"),
			yearly: $("#tp-nav-yearly"),
			switcher: $("#tp-switcher-input"),
			tabMonthly: $("#tp-tab-monthly"),
			tabYearly: $("#tp-tab-yearly")
		};

		const setActive = isMonthly => {
			$elements.switcher.prop("checked", isMonthly);
			$elements.monthly.toggleClass("is-active", isMonthly);
			$elements.yearly.toggleClass("is-active", !isMonthly);
			$elements.tabMonthly.toggleClass("tp-tab-hide", !isMonthly);
			$elements.tabYearly.toggleClass("tp-tab-hide", isMonthly);
		};

		[$elements.monthly, $elements.yearly].forEach($el =>
			$el.on("click", () => setActive($el.is($elements.monthly)))
		);

		$elements.switcher.on("click", () =>
			setActive(!$elements.monthly.hasClass("is-active"))
		);
	}
	if ($("#tp-nav-monthly").length) tabtable_active_1();



})(jQuery);