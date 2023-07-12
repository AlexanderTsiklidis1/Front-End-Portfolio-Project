//Need to use this code below from class notes to 
//generate similar sort of form to display yugioh cards by a particular inputted key
//will need to rename variables



// button.addEventListener("click", (e) => {
//     e.preventDefault();
//     const id = input.value;
//     fetch(`${BASE_URL}/${id}`)
//         .then(data => data.json())
//         .then(json => {
//             showPokemon(json)
//         })
//         .catch(err => showError(err))
// });

// const showPokemon = (json) => {
//     pokemon.innerHTML = `
//     <article>
//         <img src="${json.sprites.front_shiny}" alt=${json.name} />
//         <h2>${json.name}</h2>
//     </article>
// `
// }