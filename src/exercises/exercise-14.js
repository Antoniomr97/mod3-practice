/* 
EJERCICIO 14:
Muestra un array que solo incluya el titulo de la pelicula mejor valorada de cada uno de estos actores:
- Leonardo Dicaprio
- Robert De Niro
- Tom Hanks
*/
import { movies } from "../data.js";
import { BestFilm, actorSearcher } from "../utils.js";

export function exercise14(){
    let ActMovies = [];
    let LDMovies = actorSearcher("Leonardo DiCaprio");
    let RNMovies = actorSearcher("Robert De Niro");
    let THMovies = actorSearcher("Tom Hanks");
    
    ActMovies.push(BestFilm(LDMovies).title);
    ActMovies.push(BestFilm(RNMovies).title);
    ActMovies.push(BestFilm(THMovies).title);
    
    return ActMovies;
    
}
