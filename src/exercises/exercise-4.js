/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
“H, m lrnng Jvscrpt” // string original: “Hi, I am learning Javascript”
*/

export function exercise4(text){
    let result = "";
    for (let i=0; i < text.length; i++) {
        if (text.charAt(i) == "a" || text.charAt(i) == "A"|| text.charAt(i) == "e" || text.charAt(i) == "E"|| text. charAt(i) == "i" || text.charAt(i) == "I"|| text.charAt(i) == "o" || text.charAt(i) == "O"|| text.charAt(i)  == "u"|| text.charAt(i) == "U"){

        }
        else {
            result += text[i]
     }
    }
     return result;
}