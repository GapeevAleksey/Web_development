'use strict';

const box = document.querySelector('.box'),
	btn = document.querySelector('button');

const width = box.offsetWidth;
const heigth = box.offsetHeight;

setInterval(() => {
	btn.innerText = `${Math.floor(((box.scrollTop + box.clientHeight) * 100) / box.scrollHeight)}%`;
}, 1000);

console.log(window.getComputedStyle(btn).color);
