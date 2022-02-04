// function sayHelloTo(name) {
// 	const message = 'Hello, ' + name;
// 	return function () {
// 		console.log('message :>> ', message);
// 	};
// }

// const elena = sayHelloTo('Elena');
// elena();

// function createFrameworkManager() {
// 	const fw = ['Angular', 'React'];

// 	return {
// 		print: function () {
// 			console.log('fw :>> ', fw.join(' '));
// 		},
// 		add: function (framework) {
// 			fw.push(framework);
// 		},
// 	};
// }

// const manager = createFrameworkManager();

// manager.add('VueJS');
// manager.print();
// console.log('manager :>> ', typeof manager);

// --- SetTimeout ---

const fib = [1, 2, 3, 5, 8, 13, 21];

for (var i = 0; i < fib.length; i++) {
	(function (j) {
		setTimeout(() => {
			console.log(`fib[${j}] :>> `, fib[j]);
		}, j * 1000);
	})(i);
}

// (function (q) {
// 	console.log('q :>> ', q);
// })(5);
