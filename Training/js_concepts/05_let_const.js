// // --- let ---

// let a = 'var a';
// let b = 'var b';

// {
// 	a = 'new var A';
// 	let b = 'local var B';
// 	console.log('Scope A:', a);
// 	console.log('Scope B:', b);
// }
// console.log('A:', a);
// console.log('B:', b);

// --- const ---

const port = 8080;
const array = ['234', 'gdfgdf', 'dfhj 5634 3'];
array.shift();

console.log('array :>> ', array);

const obj = {};

obj.name = 'Alex';
obj.age = 35;
console.log('obj :>> ', obj);
delete obj.age;
console.log('obj :>> ', obj);
