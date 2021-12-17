'use strict';

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', 95);
    while (
      personalMovieDB.count == '' ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', 95);
    }
  },
  rememberMyFilms: () => {
    let a1, a2;

    for (let i = 0; i < 2; i++) {
      do {
        a1 = prompt('Один из последних просмотренных фильмов');
      } while (a1 == '' || a1 == undefined || a1.length > 50);

      a2 = +prompt('На сколько оцениваете его?', 10);
      personalMovieDB.movies[a1] = a2;
    }
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB: function (rules) {
    personalMovieDB.privat = rules;
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: () => {
    for (let i = 0; i < 3; i++) {
      personalMovieDB.genres[i] = prompt(
        `Ваш любимый жанр под номером ${i + 1}`,
        ''
      );
      if (
        personalMovieDB.genres[i] == '' ||
        personalMovieDB.genres[i] == undefined
      ) {
        i--;
      }
    }
    personalMovieDB.genres.forEach((item, key) => {
      console.log(`Жанр ${key + 1}: ${item}`);
    });
  },
  toggleVisibleMyDB: function () {
    personalMovieDB.privat
      ? (personalMovieDB.privat = false)
      : (personalMovieDB.privat = true);
  },
};

personalMovieDB.toggleVisibleMyDB();
