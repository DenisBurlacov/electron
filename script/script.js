"use strict";

$('.video-slide-count').slick({
	arrows: false,
	slidesToShow: 4,
	slidesToScroll: 4,
	dots: true,
	appendDots: $('[data-js="video-slider-btns"]')
});



$('.academy-slide-count').slick({
	arrows: false,
	slidesToShow: 3,
	slidesToScroll: 3,
	dots: true,
	vertical:true,
	appendDots: $('[data-js="academy-slider-btns"]')
});

$(".brands-list").slick({
	arrows: false,
	variableWidth: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	infinite: true,
	centerMode: true

});

 $(".recomended-list").slick({
	arrows: false,
	variableWidth: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	 autoplaySpeed: 1500,
	infinite: true,
	centerMode: true,
	 dots: true,
	 appendDots: $('[data-js="recomended-slider-btns"]')

});

$('.partner-list').slick({
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	vertical: true,
	dots: true,
	appendDots: $('[data-js="partner-slider-btns"]')
});