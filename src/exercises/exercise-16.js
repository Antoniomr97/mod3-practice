/* 
EJERCICIO 16:
Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
*/

export function exercise16(year){
    for (let i = 0; i < 999999999999999;){
        if (year < i + 100){
            return `Siglo ${i / 100 + 1}`;
        }
        else{
            i += 100;
        }
    }
    
}