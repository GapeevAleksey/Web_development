/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
  movies: [
    'Логан',
    'Лига справедливости',
    'Ла-ла лэнд',
    'Одержимость',
    'Скотт Пилигрим против...',
    'Матрица',
    '1 + 1',
  ],
};

const promoAdv = document.querySelector('.promo__adv'),
  promoGenre = document.querySelector('.promo__genre'),
  promoBg = document.querySelector('.promo__bg'),
  promoInteractiveList = document.querySelector('.promo__interactive-list');

promoAdv.remove();
promoGenre.textContent = 'Драма';
promoBg.style.cssText = 'background: url("img/bg.jpg") 0 0 / cover no-repeat';
promoInteractiveList.innerHTML = '';

movieDB.movies.sort();
for (let i = 0; i < movieDB.movies.length; i++) {
  let film = document.createElement('li');
  film.classList.add('promo__interactive-item');
  film.textContent = `${i + 1}. ${movieDB.movies[i]}`;
  promoInteractiveList.append(film);
}

// for (let key of movieDB.movies) {
//   let film = document.createElement('li');
//   film.classList.add('promo__interactive-item');
//   film.textContent = `${key}`;
//   promoInteractiveList.append(film);
// }
