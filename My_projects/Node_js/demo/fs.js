const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log('OK!');
// });

const filePath = path.join(__dirname, 'test', 'text.txt');
// fs.writeFile(filePath, 'Hello NodeJS', (err) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log('OK!');
// });
// fs.appendFile(filePath, '\nADD INFO', (err) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log('OK!');
// });
fs.readFile(filePath, 'utf-8', (err, content) => {
	if (err) {
		throw err;
	}
	console.log('content:', content);
});
