function onEntry(entry) {
	entry.forEach(change => {
	  if (change.isIntersecting) {
		change.target.classList.add('element-show');
	  } else {
		change.target.classList.remove('element-show')
	  }
	});
  }
  
  let options = {
	threshold: [0.5]
  };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
	observer.observe(elm);
  }

var swiper = new Swiper(".mySwiper", {
	watchOverflow: true,
	slidesPerView: 'auto',
	slidesPerGroup: 1,
	slidesPerColumn: 1,
	spaceBetween: 0,
	freeMode: true,
	initialSlide: 0,
	dots: false,
	keyboard: true,
	mousewheel: true,
});