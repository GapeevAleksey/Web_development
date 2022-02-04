// const personOne = {
// 	surname: 'Jager',
// 	knows(name) {
// 		console.log(`What do you know about ${name} ${this.surname}`);
// 	},
// };

// const personTwo = {
// 	surname: 'Travolta',
// };
// personOne.knows('Mick');
// personOne.knows.call(personTwo, 'John'); // принимает список параметров
// personOne.knows.apply(personTwo, ['John']); // принимает массив параметров
// personOne.knows.bind(personTwo, 'John')(); // создаёт функцию

// ====================================

// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// 	this.aboutPerson = function () {
// 		console.log(`${this.name} имеет возраст ${age}`);
// 	};
// }

// const putin = new Person('Vladimir', 75);
// putin.aboutPerson();

// // === Явный==================================
// function logThis() {
// 	console.log(this);
// }
// const ivanov = {
// 	age: 45,
// };

// // === Не явный =====================
// const petrov = {
// 	age: 54,
// 	logThis: logThis,
// };

// logThis.call(ivanov);
// petrov.logThis();

// == Стрелочные функции ==============

function Cat(color) {
	this.color = color;
	(() => {
		console.log('context: ', this);
	})();
	function showThis() {
		console.log('showContext: ', this);
	}
	showThis();
}
new Cat('Black');
