function createCards(options) {
	const card = document.createElement('div');
	card.classList.add('cards-fruits');
	options.forEach((cardOptions) => {
		const cardElement = document.createElement('div');
		cardElement.classList.add('card');
		cardElement.style.width = '18rem';
		cardElement.innerHTML = `<img src=${cardOptions.img} />
    <div class="card-body">
      <h3 class="card-title">${cardOptions.title}</h3>
      <a href="#" class="btn btn-primary" data-id='${cardOptions.id}'>Посмотреть цену</a>
      <a href="#" class="btn btn-danger">Удалить</a>
    </div>`;

		card.appendChild(cardElement);
		const priceBtn = cardElement.querySelector('.btn-primary');
		const modalContent = () => {
			return `<h5>Цена на ${cardOptions.title}: ${cardOptions.price}$</h5>`;
		};
		priceBtn.addEventListener('click', (e) => {
			e.preventDefault();
			priceModal.open();
			priceModal.setContent(modalContent());
		});
	});
	document.querySelector('.container').appendChild(card);
}
createCards(fruits);
