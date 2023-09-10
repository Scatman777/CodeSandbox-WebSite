var swiper = new swiper(".swiper", {
	spaceBetween: 10,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	watchOverflow: true,
	slidesPerView: 'auto',
	slidesPerGroup: 1,
	slidesPerColumn: 1,
	dots: false,
	mousewheel: true,
	keyboard: true,
	breakpoints: {
		630: {
			spaceBetween: 20,
			mousewheel: false
		}
	}
  });