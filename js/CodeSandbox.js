var swiper = new Swiper(".swiper", {
	watchOverflow: true,
	slidesPerView: 4,
	slidesPerGroup: 1,
	slidesPerColumn: 1,
	dots: false,
	keyboard: true,
	mousewheel: true,
	breakpoints: {
		1660: {
			slidesPerView: 1,
		},

		1024: {
			speed: 1000,
			autoplay: {
				delay: 3000,
				reverseDirection: true,
				disableOnInteraction: false,
			},
		}
	}
});