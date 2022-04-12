"use strict";

const numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++){
    let movie = prompt (' Один из последних просмотренных фильмов?'),
        rate  = prompt ('На сколько оцените его?');
    if (movie != null && rate != null && movie != '' && rate != '' && movie.length <50 && rate.length < 50) {
        personalMovieDB.movies[movie] = rate; 
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

console.log(personalMovieDB);

if(personalMovieDB.count < 10){
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count  <=30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}


