/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, EffectCards, Pagination, EffectFade } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
// import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	if (document.querySelector('.why__slider')) { 
		new Swiper('.why__slider', { 
			modules: [Navigation, EffectCards, Pagination],
			observer: true,
			observeParents: true,
			speed: 500,
			effect: "cards",
      grabCursor: true,
			slideShadows: false,
			perSlideOffset: 1,
			perSlideRotate: 5,
			rotate: true,
			pagination: {
				el: '.why__pagination',
				type: 'custom',
				renderCustom: function (swiper, current, total) {
					var currentSlide = ('0' + current).slice(-2); // Добавляем нули и ограничиваем до двух символов
					var totalSlides = ('0' + total).slice(-2); // Добавляем нули и ограничиваем до двух символов
			
					return '<span class="pagination-current">' + currentSlide + '</span> / ' +
						'<span class="pagination-total">' + totalSlides + '</span>';
				}
			},
			navigation: {
				prevEl: '.why__slider-wrap .swiper-button-prev',
				nextEl: '.why__slider-wrap .swiper-button-next',
			},
		});
	}
	if (document.querySelector('.testimonials__slider')) {
		new Swiper('.testimonials__slider', { 
			modules: [Navigation, EffectFade, Pagination],
			observer: true,
			observeParents: true,
			// slidesPerView: 1,
			// spaceBetween: 0,
			speed: 300,
			effect: 'fade',
			// crossFade: true,
			// autoplay: {
			// 	delay: 1000,
			// 	disableOnInteraction: false,
			// },


			pagination: {
				el: '.testimonials__pagination',
				type: 'custom',
				renderCustom: function (swiper, current, total) {
					var currentSlide = ('0' + current).slice(-2); // Добавляем нули и ограничиваем до двух символов
					var totalSlides = ('0' + total).slice(-2); // Добавляем нули и ограничиваем до двух символов
			
					return '<span class="pagination-current">' + currentSlide + '</span> / ' +
						'<span class="pagination-total">' + totalSlides + '</span>';
				}
			},
			
			navigation: {
				prevEl: '.testimonials__slider .swiper-button-prev',
				nextEl: '.testimonials__slider .swiper-button-next',
			},
			// breakpoints: {
			// 	320: {
			// 		autoHeight: true,
			// 	},
			// 	700: {
			// 		autoHeight: false,
			// 	}
			// },
		});
	}
}

window.addEventListener("load", function (e) {
	initSliders();
});