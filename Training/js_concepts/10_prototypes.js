// __proto__

function Cat(name, color) {
	this.name = name;
	this.color = color;
}

Cat.prototype.voice = function () {
	console.log(`Cat ${this.name} says Muaooo!`);
};

const cat1 = new Cat('Monica', 'white');
cat1.voice();
console.log(Object.getOwnPropertyDescriptor(Cat));
