var swiper = new Swiper(".mySwiper", {
	watchOverflow: true,
	slidesPerView: 4,
	spaceBetween: 360,
	freeMode: true,
	slidesPerGroup: 1,
	slidesPerColumn: 1,
	initialSlide: 0,
	dots: false,
	keyboard: true,
	mousewheel: false,
	breakpoints: {
		500: {
			slidesPerView: 'auto',
		},

		1750: {
			mousewheel: true,
		}
	},
});