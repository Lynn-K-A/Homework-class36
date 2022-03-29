'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
function fetchData(url) {
  fetch(url).then(async response => {
  try{
    const jsonResponse = await response.json();
    console.log('response jsonResponse?', jsonResponse)
    if (response.ok) {
      return jsonResponse;
    } throw new Error('Request failed!');
  } catch(error) {
    console.log(`Oops.. something went wrong! ${error}`);
  }
});
}

function fetchAndPopulatePokemons(data) {
  
 const pokemonButton = document.createElement('button');
 pokemonButton.type = "button";
 pokemonButton.textContent= "Get Pokemon!";
 document.body.appendChild(pokemonButton);

 const selectList = document.createElement("select");
 selectList.id = "mySelect";
 document.body.appendChild(selectList);

 pokemonButton.addEventListener('click', () => {  
   const pokemonArrNames = data.results;
   console.log('data results',data.results);
   pokemonArrNames.forEach(element => {
     const pokemon = document.createElement('option');
     pokemon.text = element.name;
     pokemon.value = element.url;
     selectList.appendChild(pokemon);
   });
 });

selectList.addEventListener('change', fetchImage);

}

function fetchImage(e) {
 const selected = e.value;
 const url = `https://pokeapi.co/api/v2/pokemon/${selected}`;
 if (selected) {
  const pokeImg = document.createElement('img');
  pokeImg.src = url.img;
  document.appendChild(pokeImg);
 }
}

async function main() {
  try{
   const data = await fetchData('https://pokeapi.co/api/v2/pokemon/');
   const jsonData = {data};
   fetchAndPopulatePokemons(jsonData);
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', main);
