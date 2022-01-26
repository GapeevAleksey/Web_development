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
}

module.exports = cards;
