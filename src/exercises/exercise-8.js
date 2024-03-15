/* 
EJERCICIO 8:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar las funciones de ejercicios anteriores).
*/

import { removeAccents } from "../utils";
import { formatText } from "../utils";



export function exercise8(text){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let arrAlphabet = alphabet.split("");
    let ftext = formatText(text);
    let ctext = removeAccents(ftext);
    let arrText = ctext.split("");
    let arrResult = [];

    arrText.forEach(char => arrResult.push(arrAlphabet.indexOf(char) + 1));

    return arrResult;
}