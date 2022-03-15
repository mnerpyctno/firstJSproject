"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

console.log(personalMovieDB);

start();
rememberMyFilms();
detectPersonalLevel();
showMyDB(personalMovieDB.privat);
writeYourGenres();

function start() {

    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', 0);

    while (numberOfFilms == '' || 
           numberOfFilms == null ||
           isNaN(numberOfFilms)) {
            
            numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', 0);
        }
}

function rememberMyFilms() {

    for (let i = 0; i < 2; i++) {
        const lastViewedMovie = prompt('Один из последних фильмов?', ''),
              lastViewedMovieRate = prompt('На сколько оцените его?', '0');
    
        if (lastViewedMovie != null && 
            lastViewedMovieRate != null && 
            lastViewedMovie != '' && 
            lastViewedMovieRate != '' && 
            lastViewedMovie.length < 50) {
            
                personalMovieDB.movies[lastViewedMovie] = lastViewedMovieRate;
                console.log('done');
    
        } else {
            console.log('Error');
            i--;
        }
    
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}