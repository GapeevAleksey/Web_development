let textbox = document.querySelector('.textbox'),
  options = document.querySelector('.options');

getElementDropdownList();

console.log(options.children.length);

// --------- Получение выбранного элемента из выпадающего списка ---------------

function getElementDropdownList() {
  for (let i = 0; i < options.children.length; i++) {
    options.children[i] = addEventListener('mousedown', function (event) {
      if (
        event.target.tagName == 'DIV' &&
        event.target.parentNode.className == options.className
      ) {
        textbox.value = event.target.textContent;
      }
      // console.dir(event.target);
    });
  }
}
