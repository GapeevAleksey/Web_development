'use strict';
window.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {
		tabsContent.forEach((item) => {
			// item.style.display = 'none';
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});
		tabs.forEach((item) => {
			item.classList.remove('tabheader__item_active');
		});
	}
	function showTabContent(i = 0) {
		// tabsContent[i].style.display = 'block';
		tabsContent[i].classList.remove('hide', 'fade');
		tabsContent[i].classList.add('show', 'fade');

		tabs[i].classList.add('tabheader__item_active');
	}
	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (e) => {
		const target = e.target;
		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, index) => {
				if (item == target) {
					hideTabContent();
					showTabContent(index);
				}
			});
		}
	});

	//=== Timer ===============

	const deadline = '2021-12-31';
	setClock('.timer', deadline);

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);
		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endtime);
			days.innerHTML = addZero(t.days);
			hours.innerHTML = addZero(t.hours);
			minutes.innerHTML = addZero(t.minutes);
			seconds.innerHTML = addZero(t.seconds);
			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date()),
			days = Math.floor(t / (1000 * 60 * 60 * 24)),
			hours = Math.floor((t / (1000 * 60 * 60)) % 24),
			minutes = Math.floor((t / (1000 * 60)) % 60),
			seconds = Math.floor((t / 1000) % 60);
		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	}

	function addZero(num) {
		if (num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}
	//======================================

	// === Modal window ====================
	const modalTrigger = document.querySelectorAll('[data-modal]'),
		modal = document.querySelector('.modal');

	modalTrigger.forEach((btn) => {
		btn.addEventListener('click', () => {
			openModal();
		});
	});
	modal.addEventListener('click', (e) => {
		if (e.target == modal || e.target.getAttribute('data-close') == '') {
			closeModal();
		}
	});
	document.addEventListener('keydown', (e) => {
		if (e.code == 'Escape' && modal.classList.contains('show')) {
			closeModal();
		}
	});

	const modalTimerId = setTimeout(openModal, 500000);

	window.addEventListener('scroll', ShowModalEndPage);

	function openModal() {
		modal.classList.remove('hide');
		modal.classList.add('show');
		document.body.style.overflow = 'hidden';
		clearInterval(modalTimerId);
	}

	function closeModal() {
		modal.classList.remove('show');
		modal.classList.add('hide');
		document.body.style.overflow = '';
	}

	function ShowModalEndPage() {
		if (
			window.pageYOffset + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight - 1
		) {
			openModal();
			window.removeEventListener('scroll', ShowModalEndPage);
		}
	}

	// === Меню =======================================

	// const menu = document.querySelector('.menu__field .container');
	// menu.innerHTML = '';

	// === КЛАСС ДЛЯ СОЗДАНИЯ КАРТОЧЕК ТОВАРОВ ================
	class MenuItem {
		constructor(parentSelector, img, title, text, price, ...classes) {
			this.parentNode = document.querySelector(parentSelector);
			this.img = img;
			this.title = title;
			this.text = text;
			this.price = price;
			this.classes = classes;
		}
		createMenuItem() {
			const newMenuElement = document.createElement('div');
			this.classes.forEach((className) => newMenuElement.classList.add(className));
			this.parentNode.append(newMenuElement);
			newMenuElement.innerHTML = `<img src="${this.img}" alt="vegy">
			<h3 class="menu__item-subtitle">${this.title}</h3>
			<div class="menu__item-descr">
			${this.text}
			</div>
			<div class="menu__item-divider"></div>
			<div class="menu__item-price">
				<div class="menu__item-cost">Цена:</div>
				<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
			</div>`;
		}
	}

	// === СОЗДАНИЕ КАРТОЧЕК ТОВАРОВ =========================================================================

	const getResource = async (url) => {
		const resultGetData = await fetch(url);

		if (!resultGetData.ok) {
			throw new Error(`Ошибка запроса. Код: ${resultGetData.status}`);
		}

		return await resultGetData.json();
	};

	axios.get('http://localhost:3000/menu').then((response) => {
		response.data.forEach(({ img, title, descr, price }) => {
			new MenuItem(
				'.menu__field .container',
				img,
				title,
				descr,
				price,
				'menu__item'
			).createMenuItem();
		});
	});

	// getResource('http://localhost:3000/menu').then((data) => {
	// 	data.forEach(({ img, title, descr, price }) => {
	// 		new MenuItem(
	// 			'.menu__field .container',
	// 			img,
	// 			title,
	// 			descr,
	// 			price,
	// 			'menu__item'
	// 		).createMenuItem();
	// 	});
	// });

	// new MenuItem(
	// 	'.menu__field .container',
	// 	'img/tabs/vegy.jpg',
	// 	'Меню "Фитнес"',
	// 	`Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов.
	// 	Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и
	// 	высоким качеством!`,
	// 	229,
	// 	'menu__item'
	// ).createMenuItem();
	// new MenuItem(
	// 	'.menu__field .container',
	// 	'img/tabs/elite.jpg',
	// 	'Меню "Премиум"',
	// 	`В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд.
	// 	 Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
	// 	 praesentium dolorem voluptates nihil laudantium consequuntur, cupiditate consequatur.
	// 	 Pariatur fugit totam cumque ea necessitatibus.`,
	// 	550,
	// 	'menu__item'
	// ).createMenuItem();
	// new MenuItem(
	// 	'.menu__field .container',
	// 	'img/tabs/post.jpg',
	// 	'Меню "Постное"',
	// 	`Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения,
	// 	 молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.`,
	// 	430,
	// 	'menu__item'
	// ).createMenuItem();

	//=== ФОРМА ДЛЯ ОТПРАВКИ ДАННЫХ ============================================================================

	const forms = document.querySelectorAll('form');
	const message = {
		loading: 'Loading',
		success: 'Ok!',
		failure: 'Fail',
	};

	forms.forEach((item) => {
		bindPostData(item);
	});

	//=== ФУНКЦИЯ ДЛЯ ОТПРАВКИ ФОРМЫ ============================================================================

	const postData = async (url, data) => {
		const resultPostData = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: data,
		});
		return await resultPostData.json();
	};

	//=== ОТПРАВКА ФОРМЫ ============================================================================

	function bindPostData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			statusMessage.textContent = message.loading;
			form.insertAdjacentElement('afterend', statusMessage);

			// request.setRequestHeader('Content-type', 'application/json');

			const formData = new FormData(form);

			const object = JSON.stringify(Object.fromEntries(formData.entries()));

			// const object = {};
			// formData.forEach((item, key) => {
			// 	object[key] = item;
			// });
			// console.log(object);

			postData('http://localhost:3000/requests', object)
				.then((data) => {
					console.log(data);
					showThanksModal(message.success);

					statusMessage.remove();
				})
				.catch(() => {
					showThanksModal(message.failure);
				})
				.finally(() => {
					form.reset();
				});

			// request.addEventListener('load', () => {
			// 	if (request.status == 200) {
			// 		console.log(request.response);
			// 		showThanksModal(message.success);
			// 		form.reset();
			// 		statusMessage.remove();
			// 	} else {
			// 		showThanksModal(message.failure);
			// 	}
			// });
		});
	}

	//=== ПОКАЗ МОДАЛЬНОГО ОКНА ============================================================================

	function showThanksModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');
		prevModalDialog.classList.add('hide');
		openModal();
		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
		<div class = 'modal__content'>
			<div data-close="" class="modal__close">×</div>
			<div class="modal__title">${message}</div>
		</div>`;
		document.querySelector('.modal').append(thanksModal);

		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add('show');
			prevModalDialog.classList.remove('hide');
			closeModal();
		}, 3000);
	}

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

	// ============================================================================
});
