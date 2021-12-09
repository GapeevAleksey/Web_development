let textbox = document.querySelector('.textbox'),
  options = document.querySelector('.options');

console.log(options.children.length);

for (let i = 0; i < options.children.length; i++) {
  options.children[i] = addEventListener('click', function (event) {
    textbox.value = event.target.textContent;
  });
}
