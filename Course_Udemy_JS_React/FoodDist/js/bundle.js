/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
	// === КАЛЬКУЛЯТОР ==============================================================

	const resultCalories = document.querySelector('.calculating__result span');

	let sexPersone, heightPersone, weightPersone, agePersone, ratioPersone;

	if (localStorage.getItem('sex')) {
		sexPersone = localStorage.getItem('sex');
	} else {
		sexPersone = 'female';
		sexPersone = localStorage.setItem('sex', 'female');
	}

	if (localStorage.getItem('ratio')) {
		ratioPersone = localStorage.getItem('ratio');
	} else {
		ratioPersone = 1.375;
		ratioPersone = localStorage.setItem('ratio', 1.375);
	}

	function initLocalSettings(selector, activeClass) {
		const elements = document.querySelectorAll(selector);

		elements.forEach((elem) => {
			elem.classList.remove(activeClass);

			if (
				elem.getAttribute('data-ratio') &&
				elem.getAttribute('data-ratio') == localStorage.getItem('ratio')
			) {
				elem.classList.add(activeClass);
			}

			if (elem.getAttribute('id') && elem.getAttribute('id') == localStorage.getItem('sex')) {
				elem.classList.add(activeClass);
			}
		});

		// if (e.target.getAttribute('data-ratio')) {
		// 	ratioPersone = +e.target.getAttribute('data-ratio');
		// 	localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
		// } else {
		// 	sexPersone = e.target.getAttribute('id');
		// 	localStorage.setItem('sex', e.target.getAttribute('id'));
		// }

		// elements.forEach((item) => {
		// 	item.classList.remove(activeClass);
		// });

		// e.target.classList.add(activeClass);
		// calcTotal();
	}

	initLocalSettings('#gender div', 'calculating__choose-item_active');
	initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

	function calcTotal() {
		if (!sexPersone || !heightPersone || !weightPersone || !agePersone || !ratioPersone) {
			resultCalories.textContent = '...';
			return;
		}
		if (sexPersone == 'female') {
			resultCalories.textContent = Math.round(
				(447.6 + 9.2 * weightPersone + 3.1 * heightPersone - 4.3 * agePersone) * ratioPersone
			);
		} else {
			resultCalories.textContent = Math.round(
				(88.36 + 13.4 * weightPersone + 4.8 * heightPersone - 5.7 * agePersone) * ratioPersone
			);
		}
	}

	calcTotal();

	function getStaticInfo(parentSelector, activeClass) {
		const elements = document.querySelectorAll(`${parentSelector} div`);
		console.log(elements);

		elements.forEach((item) => {
			item.addEventListener('click', (e) => {
				if (e.target.getAttribute('data-ratio')) {
					ratioPersone = +e.target.getAttribute('data-ratio');
					localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
				} else {
					sexPersone = e.target.getAttribute('id');
					localStorage.setItem('sex', e.target.getAttribute('id'));
				}

				elements.forEach((item) => {
					item.classList.remove(activeClass);
				});

				e.target.classList.add(activeClass);
				calcTotal();
			});
		});

		// document.querySelector(parentSelector).addEventListener('click', (e) => {
		// 	if (e.target.getAttribute('data-ratio')) {
		// 		ratioPersone = +e.target.getAttribute('data-ratio');
		// 	} else {
		// 		sexPersone = e.target.getAttribute('id');
		// 	}

		// 	elements.forEach((item) => {
		// 		item.classList.remove(activeClass);
		// 	});

		// 	e.target.classList.add(activeClass);
		// 	calcTotal();
		// });
	}

	getStaticInfo('#gender', 'calculating__choose-item_active');
	getStaticInfo('.calculating__choose_big', 'calculating__choose-item_active');

	function getDynamicInfo(selector) {
		const input = document.querySelector(selector);
		input.addEventListener('input', (e) => {
			if (input.value.match(/\D/g)) {
				input.style.border = '1px solid red';
			} else {
				input.style.border = 'none';
			}

			switch (input.getAttribute('id')) {
				case 'height':
					heightPersone = +input.value;
					break;
				case 'weight':
					weightPersone = +input.value;
					break;
				case 'age':
					agePersone = +input.value;
					break;
			}
			calcTotal();
		});
	}

	getDynamicInfo('#height');
	getDynamicInfo('#weight');
	getDynamicInfo('#age');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);


/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards() {
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

	// axios.get('http://localhost:3000/menu').then((response) => {
	// 	response.data.forEach(({ img, title, descr, price }) => {
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

	(0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)('http://localhost:3000/menu').then((data) => {
		data.forEach(({ img, title, descr, price }) => {
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);


/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function forms(formSelector, modalTimerId) {
	//=== ФОРМА ДЛЯ ОТПРАВКИ ДАННЫХ ============================================================================

	const forms = document.querySelectorAll(formSelector);
	const message = {
		loading: 'Loading',
		success: 'Ok!',
		failure: 'Fail',
	};

	forms.forEach((item) => {
		bindPostData(item);
	});

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

			(0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', object)
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

	function showThanksModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');
		prevModalDialog.classList.add('hide');
		(0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId);
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
			(0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
		}, 3000);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);


/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "closeModal": () => (/* binding */ closeModal)
/* harmony export */ });
function openModal(modalSelector, modalTimerId) {
	const modal = document.querySelector(modalSelector);
	modal.classList.remove('hide');
	modal.classList.add('show');
	document.body.style.overflow = 'hidden';
	if (modalTimerId) {
		clearInterval(modalTimerId);
	}
}

function closeModal(modalSelector) {
	const modal = document.querySelector(modalSelector);
	modal.classList.remove('show');
	modal.classList.add('hide');
	document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {
	// === Modal window ====================
	const modalTrigger = document.querySelectorAll(triggerSelector),
		modal = document.querySelector(modalSelector);

	modalTrigger.forEach((btn) => {
		btn.addEventListener('click', () => {
			openModal(modalSelector, modalTimerId);
		});
	});
	modal.addEventListener('click', (e) => {
		if (e.target == modal || e.target.getAttribute('data-close') == '') {
			closeModal(modalSelector);
		}
	});
	document.addEventListener('keydown', (e) => {
		if (e.code == 'Escape' && modal.classList.contains('show')) {
			closeModal(modalSelector);
		}
	});

	window.addEventListener('scroll', ShowModalEndPage);

	function ShowModalEndPage() {
		if (
			window.pageYOffset + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight - 1
		) {
			openModal(modalSelector, modalTimerId);
			window.removeEventListener('scroll', ShowModalEndPage);
		}
	}

	//=== ПОКАЗ МОДАЛЬНОГО ОКНА ============================================================================
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);




/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({
	container,
	slide,
	nextArrow,
	prevArrow,
	totalCounter,
	currentCounter,
	wrapper,
	field,
}) {
	//=== СЛАЙДЕР ============================================================================

	const sliderPrev = document.querySelector(prevArrow),
		slider = document.querySelector(container),
		sliderNext = document.querySelector(nextArrow),
		currentSlide = document.querySelector(currentCounter),
		totalSlides = document.querySelector(totalCounter),
		allSlides = document.querySelectorAll(slide),
		slidesWrapper = document.querySelector(wrapper),
		slidesField = document.querySelector(field),
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);


/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
	// === TABS =====================================================

	const tabs = document.querySelectorAll(tabsSelector),
		tabsContent = document.querySelectorAll(tabsContentSelector),
		tabsParent = document.querySelector(tabsParentSelector);

	function hideTabContent() {
		tabsContent.forEach((item) => {
			// item.style.display = 'none';
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});
		tabs.forEach((item) => {
			item.classList.remove('activeClass');
		});
	}
	function showTabContent(i = 0) {
		// tabsContent[i].style.display = 'block';
		tabsContent[i].classList.remove('hide', 'fade');
		tabsContent[i].classList.add('show', 'fade');

		tabs[i].classList.add('activeClass');
	}
	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (e) => {
		const target = e.target;
		if (target && target.classList.contains(tabsSelector.slice(1))) {
			tabs.forEach((item, index) => {
				if (item == target) {
					hideTabContent();
					showTabContent(index);
				}
			});
		}
	});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);


/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline) {
	//=== Timer ===============

	setClock(id, deadline);

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
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);


/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData),
/* harmony export */   "getResource": () => (/* binding */ getResource)
/* harmony export */ });
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

async function getResource(url) {
	const resultGetData = await fetch(url);

	if (!resultGetData.ok) {
		throw new Error(`Ошибка запроса. Код: ${resultGetData.status}`);
	}

	return await resultGetData.json();
}





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");











window.addEventListener('DOMContentLoaded', () => {
	const modalTimerId = setTimeout(() => {
		(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)('.modal', modalTimerId);
	}, 500000);

	(0,_modules_calc__WEBPACK_IMPORTED_MODULE_0__["default"])();
	(0,_modules_cards__WEBPACK_IMPORTED_MODULE_1__["default"])();
	(0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])('form', modalTimerId);
	(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])('[data-modal]', '.modal', modalTimerId);
	(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])({
		container: '.offer__slider',
		nextArrow: '.offer__slider-next',
		prevArrow: '.offer__slider-prev',
		slide: '.offer__slide',
		totalCounter: '#total',
		currentCounter: '#current',
		wrapper: '.offer__slider-wrapper',
		field: '.offer__slider-inner',
	});
	(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
	(0,_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"])('.timer', '2022-03-01');
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map