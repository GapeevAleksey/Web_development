'use strict';

const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = () => (xhr.status <= 400 ? resolve(xhr.response) : reject(xhr.response));
    xhr.onerror = () => reject(xhr.response);
    xhr.send(JSON.stringify(body));
  });
}
// sendRequest('GET', requestURL)
//   .then((answer) => console.log(answer))
//   .catch(() => console.log('OOOppPSSSs!!'));
const body = {
  name: 'Aleksei',
  age: 35,
};

sendRequest('POST', requestURL, body)
  .then((answer) => console.log(answer))
  .catch(() => console.log('OOOppPSSSs!!'));
