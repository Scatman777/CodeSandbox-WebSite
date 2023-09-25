var swiper = new Swiper(".mySwiper", {
	watchOverflow: true,
	slidesPerView: 4,
	slidesPerGroup: 1,
	slidesPerColumn: 1,
	initialSlide: 0,
	dots: false,
	keyboard: true,
	mousewheel: true,
	breakpoints: {
		500: {
			slidesPerView: 2,
		},

		1700: {
			slidesPerView: 3,
		}	
	},
});