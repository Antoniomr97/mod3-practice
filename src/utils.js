import {movies} from "./data";


export function showContent(num, content) {
  document.getElementById("practice").innerHTML += `
    <div class="exercise">
      <h3 class="heading">Exercise ${num}</h3>
      <pre>${JSON.stringify(content, undefined, 2)}</pre>
    </div>
  `;
}
export function removeAccents(text) {
  const accents = "áéíóúÁÉÍÓÚ";
  const vowels = "aeiouAEIOU";
  for (let i = 0; i < accents.length; i++){
      if (text.includes(accents.charAt(i))){
          text = text.replaceAll(accents.charAt(i), vowels.charAt(i));
      }
  }
  return text;
}
export function formatText(text) {
  return text.toLowerCase().replaceAll(" ","");
}
export function actorSearcher(name){
  let actorArray = [];
  for (let i = 0; i < movies.length; i++){
    if (movies[i].actors.includes(name)) {
        actorArray.push(movies[i]);
    }
}
  return actorArray;
}
export function BestFilm(object){
  let BestMovie = object[0];
  for (let i = 1; i < object.length; i++) {
    if (object[i].rating > BestMovie.rating){
      BestMovie = object[i];
    }
  }
  return BestMovie;
}

export function orderDescending(movie1, movie2) {
  return movie2.rating - movie1.rating;
}

export function countCharacters(text) {
  const Counter = {};
  for (let c of text) {
      if (Counter[c]) {
          Counter[c]++;
      } else {
          Counter[c] = 1;
      }
  }
  const values = Object.values(Counter);
  return {Counter, values};
}