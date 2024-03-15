/* 
EJERCICIO 17:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje:
"la cadena 'hola mundo' no es un isograma"
*/

import { countCharacters } from "../utils";

export function exercise17(text){
    const characters = countCharacters(text).values;
    const tester = characters.every(repetition => repetition === characters[0]);
    if (tester == true){
        return `La cadena ${text} es un isograma`;
    } else {
        return `La cadena ${text} no es un isograma`;
    }
}