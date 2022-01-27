try {
	console.log(Normal);
} catch (error) {
	console.log(`Error: ${error.name}`);
} finally {
	console.log('End');
}
console.log('Continue...');
