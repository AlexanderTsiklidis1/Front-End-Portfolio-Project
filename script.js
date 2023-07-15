// const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php"

// const button = document.querySelector("button");
// const input = document.querySelector("input");
// const yugioh = document.querySelector(".Yugioh-Cards");




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





// const button = document.getElementById("reload");
// const container = document.getElementById("container");
// document.addEventListener("DOMContentLoaded", () => {
//   loadNewCard();
//   button.addEventListener("click", loadNewCard);
// });
// function loadNewCard() {
//   fetch("https://db.ygoprodeck.com/api/v7/randomcard.php").then(response=>{
//     return response.json()
//   }).then(body =>{
//     console.log(body)
//     let card = body
//     for(let cards of card){
//         const section = document.createElement("div")
//         const heading = document.createElement("h3")
//         section.classList.add("card")
//         section.appendChild(heading)
//         displaySection.appendChild(section)
//     }
//   })
   
// }
    
// loadNewCard()

// document.querySelector("#reload").addEventListener("click", ()=>{
//   displaySection.innerHTML = ''
//   loadNewCard()
// });