'use strict';
// console.log('data request...');
// const req = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('Start...');
// 		const product = {
// 			name: 'TV',
// 			price: 1000,
// 		};
// 		resolve(product);
// 	}, 2000);
// });
// req.then((product) => {
// 	// console.log('data received!');
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			product.status = 'order';
// 			resolve(product);
// 		}, 2000);
// 	}).then((data) => {
// 		console.log(data);
// 	});
// });
const myRandom = Math.random().toFixed(2) * 2;
let myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (myRandom > 1) {
			resolve(myRandom);
		} else {
			reject(new Error(myRandom));
		}
	}, 1000);
});
myPromise
	.finally(() => console.log('Completed!'))
	.then(
		() => {
			console.log(`Число больше 1: ${myRandom}`);
		},
		() => {
			console.log(`Число меньше 1: ${myRandom}`);
		}
	)
	.then(
		() => {
			console.log(`true`);
		},
		() => {
			console.log(`false`);
		}
	);
