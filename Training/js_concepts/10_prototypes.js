// // __proto__

// function Cat(name, color) {
// 	this.name = name;
// 	this.color = color;
// }

// Cat.prototype.voice = function () {
// 	console.log(`Cat ${this.name} has ${this.color} color and says Muaooo!`);
// };

// const cat1 = new Cat('Monica', 'white');
// cat1.voice();

// class Dog {
// 	constructor(name, color) {
// 		this.name = name;
// 		this.color = color;
// 	}
// }
// Dog.prototype.voice = function () {
// 	console.log(`Dog ${this.name} has ${this.color} color and says Gawww!`);
// };

// const dog1 = new Dog('Rex', 'black');
// dog1.voice();

// console.log(Dog.prototype);
// console.log(dog1.__proto__);

// // -------------------------------------------

// function Person() {}
// Person.prototype.legs = 2;
// Person.prototype.skin = 'white';

// const person = new Person();
// person.name = 'Alex';

// console.log('skin' in person);

// console.log(person.hasOwnProperty('skin'));

// --- Object.create() -----

const proto = { year: 2022 };
const newYear = Object.create(proto);

console.log('year' in newYear, newYear.year);
console.log(newYear.__proto__ === proto);
