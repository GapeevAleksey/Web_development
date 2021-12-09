let outputWord = document.querySelector('.output-word'),
  buttonNext = document.querySelector('.button-next'),
  buttonStart = document.querySelector('.button-start'),
  timeout = document.querySelector('.timeout'),
  timeoutButton = document.querySelector('.timeout__button'),
  dbWordsBlockCount = document.querySelector('.db-words').children.length,
  dbWordsResult = [];

for (let i = 1; i <= dbWordsBlockCount; i++) {
  dbWordsResult.push(
    ...document
      .querySelector(`.db-words__block-${i}`)
      .textContent.trim()
      .split(',')
  );
}
// ---------- Обработка кнопок ------------------------------------------------------------

buttonStart.addEventListener('click', function () {
  buttonStart.classList.toggle('hidden-element');
  outputWord.textContent = dbWordsResult[randomWord(dbWordsResult.length)];
  setTimeout(() => {
    timeout.classList.toggle('hidden-element');
  }, 3000);
});

buttonNext.addEventListener('click', function () {
  outputWord.textContent = dbWordsResult[randomWord(dbWordsResult.length)];
});

timeoutButton.addEventListener('click', function () {
  timeout.classList.toggle('hidden-element');
  outputWord.textContent = dbWordsResult[randomWord(dbWordsResult.length)];
  setTimeout(() => {
    timeout.classList.toggle('hidden-element');
  }, 3000);
});

// ------- Вывод логов в консоль ---------

console.log(dbWordsBlockCount);
console.log(dbWordsResult.length);
console.log(dbWordsResult);

// ------- Случайное число от 0 до MAX (не включая MAX) ---------

function randomWord(max) {
  return Math.floor(Math.random() * max);
}

// // ------- Выборка слов из таблицы ---------

// let text = document.querySelectorAll('.text');
// let arr = [];
// for (let i of text) {
//   i.textContent.length > 4 ? arr.push(i.textContent) : false;
// }
// document.querySelector('.output-word').textContent = arr;
// console.log(arr.length);

// // ------- Разделение массива на части ---------
// let a = [];
// let j = 0;
// for (let i = 0; i <= Math.floor(arr.length / 1000); i++) {
//   if (i == Math.floor(arr.length / 1000)) {
//     a[i] = arr.slice(j, arr.length);
//   } else {
//     a[i] = arr.slice(j, j + 1000);
//     j += 1000;
//   }
// }
