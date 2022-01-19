'use strict';

const checkbox = document.querySelector('#checkbox'),
	form = document.querySelector('form'),
	change = document.querySelector('#color');

if (localStorage.getItem('isChecked') == 'true') {
	checkbox.checked = true;
}

if (localStorage.getItem('bg') == 'changed') {
	form.style.backgroundColor = 'green';
}

checkbox.addEventListener('change', () => {
	localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
	if (localStorage.getItem('bg') == 'changed') {
		localStorage.removeItem('bg');
		form.style.backgroundColor = 'white';
	} else {
		localStorage.setItem('bg', 'changed');
		form.style.backgroundColor = 'green';
	}
});

const persone = {
	name: 'Alex',
	age: 35,
};

const jsonPersone = JSON.stringify(persone);
localStorage.setItem('Alex', jsonPersone);
console.log(JSON.parse(localStorage.getItem('Alex')));
