'use strict';

let numberOfFilms;

start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB(false);

// === FUNCTIONS ===

function start() {
  numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', 95);
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', 95);
  }
}

function rememberMyFilms() {
  let a1, a2;

  for (let i = 0; i < 2; i++) {
    do {
      a1 = prompt('Один из последних просмотренных фильмов');
    } while (a1 == '' || a1 == undefined || a1.length > 50);

    a2 = +prompt('На сколько оцениваете его?', 10);
    personalMovieDB.movies[a1] = a2;
  }
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

function showMyDB(rules) {
  personalMovieDB.privat = rules;
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}
function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
  }
}
