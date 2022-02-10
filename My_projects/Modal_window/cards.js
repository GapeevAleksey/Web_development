function render() {}
function createCards(options) {
	const card = document.createElement('div');
	card.classList.add('cards-fruits');
	options.forEach((cardOptions) => {
		const cardElement = document.createElement('div');
		cardElement.classList.add(`card`);
		cardElement.classList.add(`${cardOptions.title}`);
		cardElement.style.width = '18rem';
		cardElement.innerHTML = `<img src=${cardOptions.img} />
    <div class="card-body">
      <h3 class="card-title">${cardOptions.title}</h3>
      <a href="#" class="btn btn-primary" data-id='${cardOptions.id}'>Посмотреть цену</a>
      <a href="#" class="btn btn-danger" data-id='${cardOptions.id}' data-btn='remove'>Удалить</a>
    </div>`;

		card.appendChild(cardElement);
		// const priceBtn = cardElement.querySelector('.btn-primary');
		const modalContent = () => {
			return `<h5>Цена на ${cardOptions.title}: <b>${cardOptions.price}$</b></h5>`;
		};
		document.addEventListener('click', (e) => {
			if (+e.target.dataset.id === cardOptions.id && !e.target.dataset.btn) {
				e.preventDefault();
				priceModal.open();
				priceModal.setContent(modalContent());
				console.log(+e.target.dataset.id);
			} else if (e.target.dataset.btn === 'remove' && +e.target.dataset.id === cardOptions.id) {
				$.confirm({
					title: 'Вы уверены?',
					content: `<h5>Вы удаляете фрукт: <b>${cardOptions.title}</b></h5>`,
				})
					.then(() => {
						document.querySelector(`.${cardOptions.title}`).outerHTML = '';
						// fruits[cardOptions.id - 1] = '';
						fruits = fruits.filter((fruit) => {
							// console.log(fruit, fruit.title, cardOptions.title);
							return fruit.title != cardOptions.title;
						});
						console.log(fruits);
					})
					.catch(() => {
						console.log('Отмена');
					});

				// e.preventDefault();
				// confirmModal.open();
				// confirmModal.setContent(`<h5>Вы удаляете фрукт: <b>${cardOptions.title}</b></h5>`);
			}
		});
	});
	document.querySelector('.container').appendChild(card);
}
createCards(fruits);
