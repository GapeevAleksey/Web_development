let dropdownFood = document.querySelector('.dropdown-food'),
  textboxFood = document.querySelector('.dropdown-food__textbox'),
  optionsFood = document.querySelector('.dropdown-food__options');

let dropdownPhone = document.querySelector('.dropdown-phone'),
  textboxPhone = document.querySelector('.dropdown-phone__textbox'),
  optionsPhone = document.querySelector('.dropdown-phone__options');

getElementDropdownList(dropdownFood, textboxFood, optionsFood);
getElementDropdownList(dropdownPhone, textboxPhone, optionsPhone);

// --------- Получение выбранного элемента из выпадающего списка ---------------

function getElementDropdownList(dropdown, textbox, options) {
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
        dropdown.classList.remove('active');
        console.log(textbox.value);
      }
      // console.dir(event.target);
    });
  }
}
