'use strict';

// const box = document.querySelector('.box'),
// 	btn = document.querySelector('button');

// const width = box.offsetWidth;
// const heigth = box.offsetHeight;

// setInterval(() => {
// 	btn.innerText = `${Math.floor(((box.scrollTop + box.clientHeight) * 100) / box.scrollHeight)}%`;
// }, 1000);

// console.log(window.getComputedStyle(btn).color);

// let dataBase = {
// 	name: 'Alex',
// 	surname: 'Ivanov',
// 	age: 25,
// };
// console.log(dataBase);

class Person {
	constructor(name, surname, age) {
		this.name = name;
		this.surname = surname;
		this.age = age;
	}
	showInfo() {
		return `${this.name} ${this.surname} имеет возраст ${this.age} лет`;
	}
}
class WipPerson extends Person {
	constructor(name, surname, age, wipStatus) {
		super(name, surname, age);
		this.wipStatus = wipStatus;
	}
}

const client1 = new Person('Alex', 'Ivanov', 25);
const client2 = new Person('Petr', 'Semenov', 76);
const client3 = new WipPerson('Victor', 'Fedorov', 33, true);
console.log(client1);
console.log(client2.showInfo());
console.log(client3);
