/* 
EJERCICIO 11:
Ordena las peliculas por valoracion (propiedad "rating") de mayor a menor
*/

import {movies} from "../data.js";

export function orderDescending(movie1, movie2) {
    return movie2.rating - movie1.rating;
}

export function exercise11(){
    let sortedMovies = movies.slice().sort(orderDescending);
    return sortedMovies;
}

