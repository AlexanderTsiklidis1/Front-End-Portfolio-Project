const searchButton = document.getElementById('search-button');
const cardlist = document.getElementById('cardlist');
let searchName = document.getElementById('card-name');
let form = document.querySelector('form')
let url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=";
let url1 = "https://db.ygoprodeck.com/api/v7/cardinfo.php?id=";

searchName.addEventListener('click', (event) => {
	if (event.key !== 'Enter') return;
	searchButton.click(); 
	event.preventDefault(); 
});

form.addEventListener('keyup', (event) => {
	if (event.key !== 'Enter') return;
	searchButton.click(); 
	event.preventDefault(); 
});

const searchCard = function () {
	let criteria = document.getElementById('card-name').value;

	fetch(`${url}${criteria}`)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			
			let cardList = data;

			let ul = document.getElementById('cardlist');
			ul.innerHTML = '';

			cardList.data.forEach((card) => {
				let li = document.createElement('li');
				li.setAttribute('id', card.id);
				li.appendChild(document.createTextNode(card.name));
				ul.appendChild(li);
			});
		})
		.catch(function (err) {
			console.log('Something went wrong!', err);
		});

	
};

const selectCard = function (e) {
	let listId = e.target.id;

	fetch(`${url1}${listId}`)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			let cardDetail = data;

			let cardName = document.getElementById('cardname');
			cardName.innerHTML = '';
			cardName.appendChild(
				document.createTextNode(cardDetail.data[0].name)
			);
			let cardType = document.getElementById('cardtype');
			cardType.innerHTML = '';
			cardType.appendChild(
				document.createTextNode(cardDetail.data[0].type)
			);
			let cardText = document.getElementById('cardtext');
			cardText.innerHTML = '';
			cardText.appendChild(
				document.createTextNode(cardDetail.data[0].desc)
			);
			let cardImage = document.getElementById('cardimage');
			cardImage.setAttribute(
				'src',
				cardDetail.data[0].card_images[0].image_url
			);
		})
		.catch(function (err) {
			console.log('Something went wrong!', err);
		});

	
};


if (this.addEventListener) {
	searchButton.addEventListener('click', searchCard);
	cardlist.addEventListener('click', selectCard);
}
// } else if (this.attachEvent) {
// 	searchButton.attachEvent('onclick', searchCard);
// 	cardlist.attachEvent('onclick', selectCard);
// }