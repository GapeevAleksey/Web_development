const personOne = {
	surname: 'Jager',
	knows(name) {
		console.log(`What do you know about ${name} ${this.surname}`);
	},
};

const personTwo = {
	surname: 'Travolta',
};
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

// function Cat(color) {
// 	this.color = color;
// 	(() => {
// 		console.log('context: ', this);
// 	})();
// 	function showThis() {
// 		console.log('showContext: ', this);
// 	}
// 	showThis();
// }
// new Cat('Black');

// ------------------------------------------------

// var numbers = {
// 	numberA: 5,
// 	numberB: 10,
// 	sum: function () {
// 		console.log(this === numbers); // => true
// 		function calculate(a, b) {
// 			return a + b;
// 		}
// 		console.log(calculate.call(this, this.numberA, this.numberB));
// 	},
// };
// numbers.sum();

// var obj = {};
// obj.myFunction = function () {
// 	return new Date().toJSON();
// };
// console.log(obj.myFunction());

// function Animal(type, legs) {
// 	this.type = type;
// 	this.legs = legs;
// 	this.logInfo = function () {
// 		console.log(this === myCat); // => false
// 		console.log('The ' + this.type + ' has ' + this.legs + ' legs');
// 	};
// }
// var myCat = new Animal('Cat', 4);
// // logs "The undefined has undefined legs"
// // or throws a TypeError, in strict mode
// setTimeout(myCat.logInfo.bind(myCat), 1000);
