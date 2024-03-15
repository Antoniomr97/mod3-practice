/* 
EJERCICIO 18:
Dada una cadena de texto, crea una función que la recibe como argumento y 
devuelve dicha cadena transformada en hashtag, es decir, la cadena comenzando 
por almohadilla (#) y las palabras sin espacios comenzando la primera letra en mayúscula
Ejemplo: "Programando en Javascript" se transforma en "#ProgramandoEnJavascript"
*/
function Capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
export function exercise18(text){
    const words = text.split(" ");
    const Capi = words.map(word => Capitalize(word));
    let trueWords = Capi.join("");
    trueWords = "#" + trueWords;
    return trueWords;
}