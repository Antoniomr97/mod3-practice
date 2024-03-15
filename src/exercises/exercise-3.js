/* 
EJERCICIO 3:
Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string:
“Number of vowels is <result>”
*/

export function exercise3(text){
    let result = 0;
    for (let i=0; i < text.length; i++) {
        if (text.charAt(i) == "a" || text.charAt(i) == "e" || text.charAt(i) == "i" || text.charAt(i) == "o" || text.charAt(i) == "u"){
            result++;
        }
        
    }
    
    return `Number of vowels is ${result}`;
}