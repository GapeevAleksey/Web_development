const result = [];
for (let i = 0; i < 10; i++) {
	result.push(function () {
		console.log(i);
	});
}

result[4]();
