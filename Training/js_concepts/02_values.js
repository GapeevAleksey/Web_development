// let a = 34,
// 	b = a;

// b++;
// console.log('a:', a);
// console.log('b:', b);

let a = [1, 2, 3];
// let b = a; // копирует ссылку на массив
let b = a.concat(); // копирует массив
console.log(a === b);
//
// let b = [];
// a.forEach((item) => {
// 	b.push(item);
// });

b.push(4);

console.log('a:', a);
console.log('b:', b);
