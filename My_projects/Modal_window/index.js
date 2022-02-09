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
// const confirmModal = $.modal({
// 	title: 'Вы уверены?',
// 	closable: true,

// 	width: '400px',
// 	footerButtons: [
// 		{
// 			text: 'Отменить',
// 			type: 'secondary',
// 			handler() {
// 				confirmModal.close();
// 				console.log('Primary btn is clicked!');
// 			},
// 		},
// 		{
// 			text: 'Удалить',
// 			type: 'danger',
// 			handler() {
// 				confirmModal.close();
// 				console.log('Primary btn is clicked!');
// 			},
// 		},
// 	],
// });
