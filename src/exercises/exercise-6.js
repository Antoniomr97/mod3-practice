/* 
EJERCICIO 6:
Genera un array de 10 números aleatorios entre 0 y 100, calcula el menor y
el mayor y muestra el resultado por pantalla
*/

export function exercise6(num){
    const myarray = Array.from(Array(10),(value,index) => Math.round(Math.random() * num));
   
    myarray.sort((a, b) => {
       return a - b;
   });
   return `The largest number is ${myarray[myarray.length - 1]} and the smallest is ${myarray[0]}.`;
}