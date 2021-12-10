let dropdown = document.querySelector('.dropdown'),
  textbox = document.querySelector('.textbox'),
  options = document.querySelector('.options');

getElementDropdownList();

console.log(options.children.length);

// --------- Получение выбранного элемента из выпадающего списка ---------------

function getElementDropdownList() {
  textbox.addEventListener('click', function () {
    dropdown.classList.toggle('active');
  });
  for (let i = 0; i < options.children.length; i++) {
    options.children[i] = addEventListener('mousedown', function (event) {
      if (
        event.target.tagName == 'DIV' &&
        event.target.parentNode.className == options.className
        // && textbox.value != event.target.textContent
      ) {
        textbox.value = event.target.textContent;
        document.querySelector('.dropdown').classList.toggle('active');
        console.log(textbox.value);
      }
      // console.dir(event.target);
    });
  }
}
