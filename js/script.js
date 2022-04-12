"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели?');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }

// function writeYourGenres() {
//     for (let i = 0; i < 3; i++){
//         let genre = prompt (`Ваш любимый жанр под номером ${i + 1}`);
//         if (genre != null  && genre != '' &&  genre.length <50 ) {
//             personalMovieDB.genres[i+1] = genre; 
            
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
   
// }
// writeYourGenres();

for (let i = 0; i < 2; i++){
    let movie = prompt (' Один из последних просмотренных фильмов?'),
        rate  = prompt ('На сколько оцените его?');
    if (movie != null && rate != null && movie != '' && rate != '' && movie.length <50 && rate.length < 50) {
        personalMovieDB.movies[movie] = rate; 
        
    } else {
        console.log('error');
        i--;
    }
}

if(personalMovieDB.count < 10){
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count  <=30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

// showMyDB();





