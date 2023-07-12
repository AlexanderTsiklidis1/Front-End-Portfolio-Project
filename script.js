const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php"

const button = document.querySelector("button");
const input = document.querySelector("input");
const yugioh = document.querySelector(".Yugioh-Cards");




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