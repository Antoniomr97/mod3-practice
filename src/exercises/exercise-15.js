/* 
EJERCICIO 15:
Muestra un array con el título y la descripción de las mejores peliculas ordenadas de mejor a peor, 
siendo las mejores aquellas cuya valoración es superior a la valoración media de todas las películas
*/

import {movies} from "../data";
import { orderDescending } from "../utils";

export function exercise15(){
    let ratings = 0;
    let bestMovies = [];

    for (let i = 0; i < movies.length; i++){
        ratings += movies[i].rating;
    }

    let average = ratings / movies.length;

    for (let i = 0; i < movies.length; i++){
        if (movies[i].rating >= average){
            bestMovies.push(movies[i]);
        }
    }
    let sortedBettersMovies = bestMovies.slice().sort(orderDescending);

    return sortedBettersMovies;
};