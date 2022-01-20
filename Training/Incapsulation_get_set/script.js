'use strict';

class User {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	#surname;

	get surname() {
		return this.#surname;
	}
	set surname(surname) {
		this.#surname = surname;
	}
}

let alex = new User('Alex', 35);
console.log(alex.surname);

alex.surname = 'Ivanov';
console.log(alex.surname);
