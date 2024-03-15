/* 
EJERCICIO 5:
Escribe una función llamada "repetitions" que recibe de entrada una cadena de texto y 
devuelve otra cadena con cada letra repetida tantas veces como la posición que ocupa 
empezando la primera repetición en mayúscula y el resto en minúscula

Ejemplos:
repetitions(‘code’) // result: “COoDddEeee”
repetitions(‘list’) // result: “LIiSssTttt”
repetitions(function) // result: “FUuNnnTtttIiiiiOoooooNnnnnnn”

*/

export function repetitions(word){
    let newword = "";
    for (let i=1; i < word.length + 1; i++){
        newword += word.charAt(i - 1).toUpperCase();
        newword += word.charAt(i-1).repeat(i - 1);
    }
    return newword;
}