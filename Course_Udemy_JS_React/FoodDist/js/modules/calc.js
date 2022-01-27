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
export default calc;
