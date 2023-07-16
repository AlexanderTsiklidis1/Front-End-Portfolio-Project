console.log("this script");
let url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=";
let cardImage1 = document.getElementById("#card1");
let cardImage2 = document.getElementById("card2");
let cardImage3 = document.getElementById("card3");

<body onload="setupQuestion()">
  <div id="trivia-question-p"></div>
    <button onclick="setupQuestion()">Click to Fetch Again!</button>
</body>