var swiper = new Swiper(".mySwiper", {
	watchOverflow: true,
	slidesPerView: 3,
	spaceBetween: 30,
	freeMode: true,
	slidesPerGroup: 1,
	slidesPerColumn: 1,
	initialSlide: 0,
	dots: false,
	keyboard: true,
	mousewheel: true,
	breakpoints: {
		500: {
			spaceBetween: 100,
		},	
	},
});