function slider() {
	//=== СЛАЙДЕР ============================================================================

	const sliderPrev = document.querySelector('.offer__slider-prev'),
		slider = document.querySelector('.offer__slider'),
		sliderNext = document.querySelector('.offer__slider-next'),
		currentSlide = document.querySelector('#current'),
		totalSlides = document.querySelector('#total'),
		allSlides = document.querySelectorAll('.offer__slide'),
		slidesWrapper = document.querySelector('.offer__slider-wrapper'),
		slidesField = document.querySelector('.offer__slider-inner'),
		width = window.getComputedStyle(slidesWrapper).width;

	let numberOfSlide = 0,
		offset = 0;

	if (allSlides.length < 10) {
		totalSlides.innerText = `0${allSlides.length}`;
		currentSlide.innerText = `0${numberOfSlide + 1}`;
	} else {
		totalSlides.innerText = allSlides.length;
		currentSlide.innerText = numberOfSlide + 1;
	}

	slidesField.style.width = 100 * allSlides.length + '%';
	slidesField.style.display = 'flex';
	slidesField.style.transition = '0.5s all';
	slidesWrapper.style.overflow = 'hidden';

	allSlides.forEach((slide) => {
		slide.style.width = width;
	});

	slider.style.position = 'relative';

	const indicators = document.createElement('ol'),
		dots = [];

	indicators.classList.add('carousel-indicators');
	slider.append(indicators);

	for (let i = 0; i < allSlides.length; i++) {
		const dot = document.createElement('li');
		dot.setAttribute('data-slide-to', i + 1);
		dot.classList.add('dot');
		if (i == 0) {
			dot.style.opacity = 1;
		}
		indicators.append(dot);
		dots.push(dot);
	}

	function deleteNotDigits(str) {
		return +str.replace(/\D/g, '');
	}

	sliderNext.addEventListener('click', (e) => {
		if (offset == deleteNotDigits(width) * (allSlides.length - 1)) {
			offset = 0;
		} else {
			offset += deleteNotDigits(width);
		}
		slidesField.style.transform = `translateX(-${offset}px)`;

		if (numberOfSlide >= allSlides.length - 1) {
			numberOfSlide = 0;
		} else {
			numberOfSlide++;
		}
		if (numberOfSlide + 1 < 10) {
			currentSlide.innerText = `0${numberOfSlide + 1}`;
		} else {
			currentSlide.innerText = numberOfSlide + 1;
		}

		dots.forEach((dot) => {
			dot.style.opacity = '0.5';
			dots[numberOfSlide].style.opacity = 1;
		});
	});

	sliderPrev.addEventListener('click', (e) => {
		if (offset == 0) {
			offset = deleteNotDigits(width) * (allSlides.length - 1);
		} else {
			offset -= deleteNotDigits(width);
		}
		slidesField.style.transform = `translateX(-${offset}px)`;

		if (numberOfSlide <= 0) {
			numberOfSlide = allSlides.length - 1;
		} else {
			numberOfSlide--;
		}
		if (numberOfSlide + 1 < 10) {
			currentSlide.innerText = `0${numberOfSlide + 1}`;
		} else {
			currentSlide.innerText = numberOfSlide + 1;
		}

		dots.forEach((dot) => {
			dot.style.opacity = '0.5';
			dots[numberOfSlide].style.opacity = 1;
		});
	});

	dots.forEach((dot) => {
		dot.addEventListener('click', (e) => {
			const slideTo = e.target.getAttribute('data-slide-to');
			numberOfSlide = slideTo - 1;
			offset = deleteNotDigits(width) * (slideTo - 1);
			slidesField.style.transform = `translateX(-${offset}px)`;

			if (numberOfSlide + 1 < 10) {
				currentSlide.innerText = `0${numberOfSlide + 1}`;
			} else {
				currentSlide.innerText = numberOfSlide + 1;
			}

			dots.forEach((dot) => {
				dot.style.opacity = '0.5';
				dots[numberOfSlide].style.opacity = 1;
			});
		});
	});

	// if (allSlides.length < 10) {
	// 	totalSlides.innerText = `0${allSlides.length}`;
	// } else {
	// 	totalSlides.innerText = allSlides.length;
	// }

	// showSlide();

	// sliderNext.addEventListener('click', (e) => {
	// 	numberOfSlide++;
	// 	showSlide();
	// });

	// sliderPrev.addEventListener('click', (e) => {
	// 	numberOfSlide--;
	// 	showSlide();
	// });

	// function showSlide() {
	// 	if (numberOfSlide >= allSlides.length) {
	// 		numberOfSlide = 0;
	// 	} else if (numberOfSlide < 0) {
	// 		numberOfSlide = allSlides.length - 1;
	// 	}
	// 	if (numberOfSlide + 1 < 10) {
	// 		currentSlide.innerText = `0${numberOfSlide + 1}`;
	// 	} else {
	// 		currentSlide.innerText = numberOfSlide + 1;
	// 	}
	// 	allSlides.forEach((item, index) => {
	// 		if (index == numberOfSlide) {
	// 			item.classList.add('show');
	// 			item.classList.remove('hide');
	// 		} else {
	// 			item.classList.add('hide');
	// 			item.classList.remove('show');
	// 		}
	// 	});
	// }
}

module.exports = slider;
