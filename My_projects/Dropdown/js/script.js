let dropdownFood = document.querySelector('.dropdown-food'),
  textboxFood = document.querySelector('.dropdown-food__textbox'),
  optionsFood = document.querySelector('.dropdown-food__options');

let dropdownPhone = document.querySelector('.dropdown-phone'),
  textboxPhone = document.querySelector('.dropdown-phone__textbox'),
  optionsPhone = document.querySelector('.dropdown-phone__options');

let dropdownCountry = document.querySelector('.dropdown-country'),
  textboxCountry = document.querySelector('.dropdown-country__textbox'),
  optionsCountry = document.querySelector('.dropdown-country__options');

getElementDropdownList(dropdownFood, textboxFood, optionsFood);
getElementDropdownList(dropdownPhone, textboxPhone, optionsPhone);
getElementDropdownList(dropdownCountry, textboxCountry, optionsCountry);

// --------- Получение выбранного элемента из выпадающего списка ---------------

function getElementDropdownList(dropdown, textbox, options) {
  // console.log(document.getElementsByClassName('dropdown'));

  textbox.addEventListener('click', function () {
    dropdown.classList.toggle('active');

    // if (document.getElementsByClassName('active').length > 1) {
    //   for (
    //     let i = 0;
    //     i < document.getElementsByClassName('dropdown').length;
    //     i++
    //   ) {
    //     document
    //       .getElementsByClassName('dropdown')
    //       [i].classList.remove('active');
    //   }
    //   dropdown.classList.toggle('active');
    // }
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
        // console.log(textbox.value);
      } else {
        dropdown.classList.remove('active');
      }
      // console.dir(event.target);
    });
  }
}
