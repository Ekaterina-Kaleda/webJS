// "use strict";
// // // Задание на урок:

// // 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// // 'Сколько фильмов вы уже посмотрели?'

// let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

// // 2) Создать объект personalMovieDB и в него поместить такие свойства:
// //     - count - сюда передается ответ на первый вопрос
// //     - movies - в это свойство поместить пустой массив
// //     - privat - в это свойство поместить boolean(логическое) значение false

// let personalMovieDB = {count: numberOfFilms, movies: [], privat: false};

// // 3) Задайте пользователю столько вопросов, сколько он задал в numberOfFilms:
// //     - 'Один из последних просмотренных фильмов?'
// //     - 'На сколько оцените его?'
// // Ответы стоит поместить в отдельные переменные
// // Записать ответы в массив movies в формате: 
// //     movies: [
// //         {
// //         'logan': '8.1'
// //         }
// //     ]

// let movie;
// let movieScore;

// for (let i = 0; i < numberOfFilms; i++) {
//     movie = prompt('Один из последних просмотренных фильмов?');
//     if (movie === '' || movie.length > 50) {
//         i--;
//         continue;
//     }
//     movieScore = prompt('На сколько оцените его?');
//     if (movieScore === '') {
//         i--;
//         continue;
//     }
//     let nameAndScore = {};
//     nameAndScore[movie] = movieScore;
//     personalMovieDB.movies.push(nameAndScore);
// }
// // for (let i = 0; i < numberOfFilms; i++) {
// //     console.log(movies[i]);
// // }
// for (let i in personalMovieDB.movies) {
//     console.log(personalMovieDB.movies[i]);
// }

// // Проверить, чтобы все работало без ошибок в консоли 

// // 4) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// // отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// // возвращаем пользователя к вопросам опять

// // 5) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// // "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// // "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// if (personalMovieDB.count < 10) {
//     alert('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count < 30) {
//     alert('Вы классический зритель');
// } else if (personalMovieDB.count >=30) {
//     alert('Вы киноман');
// } else {
//     alert('Произошла ошибка');
// }


// // 'use strict'
