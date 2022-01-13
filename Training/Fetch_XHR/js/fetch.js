'use strict';

const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
	return fetch(url, {
		method: method,
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify(body),
	})
		.then((data) => {
			if (data.ok) {
				console.log(data);
				// console.log(data.json());
				return data.json();
			}
			return data.json().then((error) => {
				const e = new Error('OOooppSSss!!!');
				e.data = error;
				console.dir(data);
				console.log(e);
				throw e;
			});
		})
		.catch((data) => data.json());
}
const body = {
	name: 'Aleksei',
	age: 35,
};
// sendRequest('GET', requestURL)
// 	.then((answer) => console.log(answer))
// 	.catch(() => console.log('OOOppPSSSs!!'));

// sendRequest('POST', requestURL, body)
// 	.then((answer) => console.log(answer))
// 	.catch((answer) => console.log('OOOppPSSSs!!'));
