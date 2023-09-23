var swiper = new Swiper(".swiper", {
	direction: 'vertical',
    effect: 'slide',
    slidesPerView: 1,
	slidesPerGroup: 1,
	slidesPerColumn: 1,
	speed: 1000,
    loop: false,
    autoplay: {
        delay: 3000,
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