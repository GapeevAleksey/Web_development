const $ = {};
const options = {
	title: 'JS Practice!',
	closable: true,
	content: `<p>Lorem ipsum dolor sit amet.</p>
  <p>Lorem ipsum dolor sit amet.</p>`,
	width: '700px',
	footerButtons: [
		{
			text: 'Ok',
			type: 'primary',
			handler() {
				modal.close();
				console.log('Primary btn is clicked!');
			},
		},
		{
			text: 'Cancel',
			type: 'danger',
			handler() {
				modal.close();
				console.log('Danger btn is clicked!');
			},
		},
	],
};
