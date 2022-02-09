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

let fruits = [
	{
		id: 1,
		title: 'Яблоки',
		price: 20,
		img: 'https://kids-flashcards.com/images/ru/8/large/picture-flashcard/яблоко.jpg',
	},
	{
		id: 2,
		title: 'Апельсины',
		price: 30,
		img: 'https://kids-flashcards.com/images/ru/8/large/picture-flashcard/апельсин.jpg',
	},
	{
		id: 3,
		title: 'Манго',
		price: 40,
		img: 'https://kids-flashcards.com/images/ru/8/large/picture-flashcard/манго.jpg',
	},
];
