//object, number, string, boolean, symbol, null, undefined

// console.log(typeof Math);
// console.log(typeof 8);
// console.log(typeof 'javascript');
// console.log(typeof (typeof 1 / 'a'));
// console.log(typeof []);

// // --- приведение типов ---

// let language = 0;

// if (language) {
// 	console.log(language);
// } else {
// 	console.log(`${language}: language is not exist.`);
// }

// console.log(Boolean(null));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(() => {}));

// // --- Строки и числа ---
// console.log(String(1) + Number('8')); // 18
// console.log('q' - 3 + 4); // NaN
// console.log('8' / '2'); // 4
// console.log(20 + 30 + 'px');

// // --- == vs === ---
// console.log(3 == '3');
// console.log(null == undefined); // true
// console.log(null === undefined); // false

console.log(false == []);
