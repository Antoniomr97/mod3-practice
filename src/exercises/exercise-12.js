/* 
EJERCICIO 12:
Filtra las peliculas que pertenezcan a la categoria "Drama" e incluye solo el título y la descripción
Sugerencia: puedes usar la variable "categories" en el archivo "src/js/data/movies.js"
*/

import {movies} from "../data.js";

export function exercise12() {
    const dramaMovies = movies.filter(movie => 
        movie.category == "Drama")
        .map(movie => ({
        title: movie.title,
        description: movie.description
    }));

    return dramaMovies;
}


