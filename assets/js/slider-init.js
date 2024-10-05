/***************************************************
==================== JS INDEX ======================
****************************************************
01. tp-testimonial-slide
02. tp-brand-slide-active
03. portfolio-4-active
04. tp-testimonial-2-active
****************************************************/

(function ($) {
	"use strict";

	////////////////////////////////////////////////////
	// 01. tp-testimonial-slide
	var slider = new Swiper('.tp-testimonial-slide', {
		slidesPerView: 1,
		speed:1500,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: ".tp-testimonial-next",
			prevEl: ".tp-testimonial-prev",
		},
		autoplay: {
			delay: 4000,
		  },
		breakpoints: {
			'1600': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'991': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	////////////////////////////////////////////////////
	// 02. tp-brand-slide-active
	var brand = new Swiper('.tp-brand-slide-active', {
		loop: true,
		spaceBetween: 0,
		speed: 2000,
		autoplay: true,
		breakpoints: {
			'1200': {
				slidesPerView: 6,
			},
			'992': {
				slidesPerView: 5,
			},
			'768': {
				slidesPerView: 4,
			},
			'576': {
				slidesPerView: 3,
			},
			'0': {
				slidesPerView: 2,
			},
		},
		a11y: false,
	});

	// 03. portfolio-4-active
	var swiper = new Swiper(".portfolio-4-active", {
		slidesPerView: 1,
		speed:1500,
		spaceBetween: 30,
		loop: true,
		freeMode: true,
		observer: true,
		observeParents: true,
		breakpoints: {
			'1200': {
				slidesPerView: 2,
			},
			'991': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	////brand-slider
	var tp_brand_slide = new Swiper(".tp-text-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 4000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
	});

	// 03. portfolio-4-active
	var swiper_2 = new Swiper(".tp-testimonial-3-slide-active", {
		slidesPerView: 1,
		spaceBetween: 0,
		speed:1000,
		loop: true,
		autoplay:true,
		breakpoints: {
			'1200': {
				slidesPerView: 1,
			},
			'991': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		navigation: {
			nextEl: ".tp-testimonial-3-next",
			prevEl: ".tp-testimonial-3-prev",
		},
	});


	////////////////////////////////////////////////////
	// 04. tp-testimonial-2-active
	var swiper = new Swiper(".tp-testimonial-2-active", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: ".tp-testimonial-2-next",
			prevEl: ".tp-testimonial-2-prev",
		},
	});

	////////////////////////////////////////////////////
	// 04. tp-testimonial-2-active
	var swiper = new Swiper(".tp-hero-2-active", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: ".tp-hero-pagenation",
			clickable: true,
		},
	});

	// 03. portfolio-4-active
	var swiper_2 = new Swiper(".tp-service-3-slide-active", {
		slidesPerView: 1,
		spaceBetween:33,
		speed:1000,
		loop: true,
		autoplay:true,
		pagination: {
			el: ".tp-service-pagenation",
			clickable: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'991': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	////////////////////////////////////////////////////
	// 04. tp-hero-4-active
	var swiper = new Swiper(".tp-hero-4-active", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: ".tp-hero-4-pagenation",
			clickable: true,
		},
	});


	////////////////////////////////////////////////////
	// 04. postbox-slider-active
	var swiper = new Swiper(".postbox-slider-active", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: ".postbox-arrow-next",
			prevEl: ".postbox-arrow-prev",
		},
	});


	// 03. portfolio-5-active
	var swiper_2 = new Swiper(".tp-portfolio-5-slide-active", {
		spaceBetween: 14,
		speed:1000,
		loop: true,
		autoplay:true,
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'991': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	// 03. portfolio-4-active
	var swiper = new Swiper(".tp-portfolio-4-active", {
		spaceBetween: 30,
		speed:1000,
		loop: true,
		autoplay:true,
		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'991': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	// 03. CLIENTS active
	var swiper = new Swiper(".tp-clients-active", {
		spaceBetween: 30,
		speed:1000,
		loop: true,
		autoplay:true,
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'991': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		navigation: {
			nextEl: ".tp-clients-next",
			prevEl: ".tp-clients-prev",
		},
	});


	// 03. portfolio-4-active
	var swiper = new Swiper(".tp-testimonial-5-active", {
		spaceBetween: 60,
		speed:1000,
		loop: true,
		autoplay:true,
		navigation: {
			nextEl: ".tp-testimonial-5-next",
			prevEl: ".tp-testimonial-5-prev",
		},
		breakpoints: {
			'1200': {
				slidesPerView: 2,
			},
			'991': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	////brand-slider
	var tp_brand_slide = new Swiper(".tp-brand-5-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 4000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
	});


})(jQuery);