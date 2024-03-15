/* 
EJERCICIO 2:
Muestra el siguiente mensaje dependiendo de si un número es par o impar:
“Number 34 is even” ó “Number 13 is odd”
Nota: even = par | odd = impar
*/
export function exercise2(number) {
  const result = number % 2 === 0 ? "even" : "odd";
  return `Number ${number} is ${result}`;
}
