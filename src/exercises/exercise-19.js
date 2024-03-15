/* 
EJERCICIO 19:
Dada una cadena de texto, crea una función que devuelva un objeto donde
las claves (keys) son cada una de las letras de la cadena y el valor el
número de veces que se repite cada una de ellas.
Ejemplo: "Hello world"
{
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    r: 1,
    d: 1,
}
Nota: siempre letras minúsculas y sin tildes (para simplificar)
*/

import { formatText , removeAccents } from "../utils";

export function exercise19(text){
    let fText = formatText(text);
    let clearText = removeAccents(fText);

    const Counter = {};
    for (let letter of clearText) {
        if (Counter[letter]){
            Counter[letter]++;
        } else {
            Counter[letter] = 1;
        }
    }
    return Counter;
}