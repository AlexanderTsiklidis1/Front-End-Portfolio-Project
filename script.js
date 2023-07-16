console.log("this script");
let url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=";
let cardImage1 = document.getElementById("#card1");
let cardImage2 = document.getElementById("card2");
let cardImage3 = document.getElementById("card3");

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
 else if (this.attachEvent) {
	searchButton.attachEvent('onclick', searchCard);
	cardlist.attachEvent('onclick', selectCard);
}