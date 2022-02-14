import { Select } from './select_js/select';
import './select_js/style.scss';
const select = new Select('#select', {
	placeholder: 'Choose your pet',
	// selectedId: 2,
	data: [
		{ id: 1, value: 'Cat' },
		{ id: 2, value: 'Dog' },
		{ id: 3, value: 'Duck' },
		{ id: 4, value: 'Rabbit' },
		{ id: 5, value: 'Mouse' },
	],
	onSelect(item) {
		console.log('Selected item:', item);
	},
});

window.s = select;
