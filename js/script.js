const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', 0);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

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

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);