/* 
EJERCICIO 7:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado
Ejemplos:
"La frase 'Dábale arroz a la zorra el abad' es un palíndromo"
"La frase 'hola mundo' NO es un palíndromo"
*/

import { removeAccents } from "../utils";
import { formatText } from "../utils";

export function exercise7(text) {
    let pretext = text;
    let result="";
    let ftext = formatText(text);
    let ctext = removeAccents(ftext);

    let reversedText = ctext.split("").reverse().join("");

    if (ctext === reversedText){
        result = `La frase ${pretext} es un palíndromo`;
    } else {
        result = `La frase ${pretext} NO es un palíndromo`;
    }
    return result;
}