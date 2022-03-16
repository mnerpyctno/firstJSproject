"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {

        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?');
    
        while (personalMovieDB.count == '' || 
               personalMovieDB.count == null ||
               isNaN(personalMovieDB.count)) {
                
                personalMovieDB.count = 
                    +prompt('Сколько фильмов Вы уже посмотрели?');
            }
    },
    rememberMyFilms: () => {

        for (let i = 0; i < 2; i++) {
            const lastViewedMovie = prompt('Один из последних фильмов?', ''),
                  lastViewedMovieRate = prompt('На сколько оцените его?', '0');
        
            if (lastViewedMovie != null && 
                lastViewedMovieRate != null && 
                lastViewedMovie != '' && 
                lastViewedMovieRate != '' && 
                lastViewedMovie.length < 50) {
                
                    personalMovieDB.movies[lastViewedMovie] = 
                    lastViewedMovieRate;
                    console.log('done');
        
            } else {
                console.log('Error');
                i--;
            }
        
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: (hidden) => {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
    
            if (genre != null && genre != '') {
                    personalMovieDB.genres[i - 1] = genre;
            } else {
                console.log('Вы ввели некорректные данные.');
                i--;
            }

            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i+1} - это ${item}`);
            });
        }
    },
    toggleVisibleMyDB: () => {
        if(!personalMovieDB.privat) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },
};

console.log(personalMovieDB);