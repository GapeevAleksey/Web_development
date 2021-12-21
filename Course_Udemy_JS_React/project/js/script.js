/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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

  const adv = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    poster = document.querySelector('.promo__bg'),
    movieList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    addFilm = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]');

  const deleteAdv = (arg) => {
    arg.forEach((item) => item.remove());
  };
  const makeChanges = () => {
    genre.textContent = 'Драма';
    poster.style.cssText =
      'background: url("img/bg.jpg") 0 0 / cover no-repeat';
  };
  const sortArr = (arr) => {
    arr.sort();
  };

  addForm.addEventListener('submit', (e) => {
    // if (e.target.nodeName == 'BUTTON') {
    e.preventDefault();
    let newFilm = addFilm.value;
    const favorite = checkbox.checked;

    if (newFilm) {
      if (newFilm.length > 10) {
        newFilm = `${newFilm.substr(0, 10)}...`;
      }
      if (favorite) {
        console.log('Добавляем любимый фильм!');
      }
      movieDB.movies.push(newFilm.toUpperCase());
      sortArr(movieDB.movies);
      createMovieList(movieDB.movies, movieList);
    }
    e.target.reset();
    // }
  });

  // movieList.addEventListener('click', (e) => {
  //   if (e.target.className == 'delete') {
  //     console.dir(e.target.parentElement.parentElement);
  //     movieDB.movies.splice(e.target.parentNode.innerText[0] - 1, 1);
  //     createMovieList(movieDB.movies, movieList);
  //   }
  // });

  deleteAdv(adv);
  makeChanges();
  sortArr(movieDB.movies);
  createMovieList(movieDB.movies, movieList);

  //========== FUNCTIONS ===============

  function createMovieList(films, parent) {
    sortArr(films);
    parent.innerHTML = '';
    films.forEach((item, index) => {
      parent.innerHTML += `
    <li class="promo__interactive-item">${index + 1}. ${item}
    <div class="delete"></div>
  </li>
      `;
    });
    movieList.querySelectorAll('.delete').forEach((value, item) => {
      value.addEventListener('click', (e) => {
        movieDB.movies.splice(item, 1);
        createMovieList(films, parent);
      });
    });
  }

  // movieDB.movies.forEach((item, index) => {
  //   let film = document.createElement('li');
  //   film.classList.add('promo__interactive-item');
  //   film.textContent = `${index + 1}. ${item}`;
  //   promoInteractiveList.append(film);
  // });

  // for (let i = 0; i < movieDB.movies.length; i++) {
  //   let film = document.createElement('li');
  //   film.classList.add('promo__interactive-item');
  //   film.textContent = `${i + 1}. ${movieDB.movies[i]}`;
  //   promoInteractiveList.append(film);
  // }

  // for (let key of movieDB.movies) {
  //   let film = document.createElement('li');
  //   film.classList.add('promo__interactive-item');
  //   film.textContent = `${key}`;
  //   promoInteractiveList.append(film);
  // }
});
