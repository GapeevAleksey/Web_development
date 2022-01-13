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
// const myRandom = Math.random().toFixed(2) * 2;
// let myPromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		if (myRandom > 1) {
// 			resolve();
// 		} else {
// 			reject(new Error());
// 		}
// 	}, 1000);
// });
// myPromise
// 	.finally(() => console.log('Completed!'))
// 	.then(
// 		() => {
// 			console.log(`Число больше 1: ${myRandom}`);
// 		},
// 		() => {
// 			console.log(`Число меньше 1: ${myRandom}`);
// 		}
// 	)
// 	.then(
// 		() => {
// 			console.log(`true`);
// 		},
// 		() => {
// 			console.log(`false`);
// 		}
// 	);

// const money = new Promise((resolve, reject) => {
// 	console.log('data preparation...');

// 	setTimeout(() => {
// 		const products = {
// 			first: 'bread',
// 			second: 'milk',
// 		};
// 		if (Math.random().toFixed(2) * 2 > 1) {
// 			products.third = 'chocolate';
// 			resolve(products);
// 		} else {
// 			reject();
// 		}
// 	}, 1000);
// });

// money
// 	.then((data) => {
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 				if (Math.random().toFixed(2) * 2 > 1) {
// 					data.money = 2;
// 					resolve(data);
// 				} else {
// 					data.money = 0;
// 					reject();
// 				}
// 			}, 1000);
// 		}).catch(() => {
// 			console.log(data);
// 		});
// 	})
// 	.then((nextData) => {
// 		nextData.rich = 'YES';
// 		console.log(nextData);
// 	})
// 	.catch(() => {
// 		console.log('dataError');
// 	});

// const prom1 = (ms) => new Promise((r) => setTimeout(() => r(), ms));
// const prom1 = (ms) => {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve();
// 		}, ms);
// 	});
// };

// prom1(1000).then(() => console.log('1 ces'));
// prom1(2000).then(() => console.log('2 ces'));
// prom1(3000).then(() => console.log('3 ces'));

// Promise.all([prom1(1000), prom1(2000), prom1(3000)]).then(() => console.log('Sucsess'));
