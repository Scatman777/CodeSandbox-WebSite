var swiper = new Swiper(".swiper", {
	watchOverflow: true,
	slidesPerView: 4,
	slidesPerGroup: 1,
	slidesPerColumn: 1,
	initialSlide: 0,
	dots: false,
	keyboard: true,
	mousewheel: true,
	breakPoints: {
		1700: {
			slidesPerView: 3,
		},

		500: {
			spaseBeatween: 100,
		}
	}
});