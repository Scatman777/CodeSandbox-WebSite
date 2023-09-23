var swiper = new Swiper(".swiper", {
	direction: 'vertical',
    effect: 'slide',
    slidesPerView: 1,
	slidesPerGroup: 1,
	slidesPerColumn: 1,
    loop: true,
    autoplay: {
        delay: 2000,
        reverseDirection: true,
        disableOnInteraction: false,
    },
	// direction: 'vertical',
	// watchOverflow: true,
	// slidesPerView: 'auto',
	// slidesPerGroup: 1,
	// slidesPerColumn: 1,
	// dots: false,
	// keyboard: true,
	// mousewheel: true
});