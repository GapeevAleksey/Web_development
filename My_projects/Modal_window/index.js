const modal = $.modal(options);
const priceModal = $.modal({
	title: 'Цена товара',
	closable: true,

	width: '400px',
	footerButtons: [
		{
			text: 'Закрыть',
			type: 'primary',
			handler() {
				priceModal.close();
				console.log('Primary btn is clicked!');
			},
		},
	],
});
