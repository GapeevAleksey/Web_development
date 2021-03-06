let dropdownFood = document.querySelector('.dropdown-food'),
  textboxFood = document.querySelector('.dropdown-food__textbox'),
  optionsFood = document.querySelector('.dropdown-food__options');

let dropdownPhone = document.querySelector('.dropdown-phone'),
  textboxPhone = document.querySelector('.dropdown-phone__textbox'),
  optionsPhone = document.querySelector('.dropdown-phone__options');

let dropdownCountry = document.querySelector('.dropdown-country'),
  textboxCountry = document.querySelector('.dropdown-country__textbox'),
  optionsCountry = document.querySelector('.dropdown-country__options');

let dropdownAnimal = document.querySelector('.dropdown-animal'),
  textboxAnimal = document.querySelector('.dropdown-animal__textbox'),
  optionsAnimal = document.querySelector('.dropdown-animal__options');

getElementDropdownList(dropdownFood, textboxFood, optionsFood);
getElementDropdownList(dropdownPhone, textboxPhone, optionsPhone);
getElementDropdownList(dropdownCountry, textboxCountry, optionsCountry);
getElementDropdownList(dropdownAnimal, textboxAnimal, optionsAnimal);

// --------- Получение выбранного элемента из выпадающего списка ---------------

function getElementDropdownList(dropdown, textbox, options) {
  textbox.addEventListener('click', function () {
    dropdown.classList.toggle('active');
    addEventListener('mousedown', function (event) {
      if (
        // event.target.closest(options.className)
        event.target.tagName == 'DIV' &&
        event.target.parentNode.className == options.className
      ) {
        textbox.value = event.target.textContent;
        dropdown.classList.remove('active');
        // console.dir(event.target);
        // console.log(options.className);
      } else if (event.target.parentNode.className != dropdown.className) {
        dropdown.classList.remove('active');
      }
    });
  });

  // for (let i = 0; i < options.children.length; i++) {
  //   options.children[i] = addEventListener('mousedown', function (event) {
  //     if (event.target.tagName == 'DIV' && event.target.parentNode.className == options.className) {
  //       textbox.value = event.target.textContent;
  //       dropdown.classList.remove('active');
  //     } else if (event.target.parentNode.className != dropdown.className) {
  //       dropdown.classList.remove('active');
  //     }
  //   });
  //   break;
  // }
}

// ------------ Неиспользуемый код --------------

// ------ Живой список "активных" классов -------

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
