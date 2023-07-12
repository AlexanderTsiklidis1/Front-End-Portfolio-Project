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