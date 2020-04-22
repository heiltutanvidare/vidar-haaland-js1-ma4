// Question 3
// Make a call to https://api.rawg.io/api/games/4200 and pass the
// JSON object it returns to a function called createGameDetails.
// Inside createGameDetails replace the placeholder values in the HTML
// above with properties from the object returned from the API call.
// Use either the background_image or background_image_additional property
// as the background image of the <div class="image"> element.

const url = "https://api.rawg.io/api/games/4200";

// chosing to use fetch and arrow syntax to practice the different methods
fetch(url)
    .then((response) => response.json())
    .then((json) => createGameDetails(json))
    .catch((error) => console.log(error));

function createGameDetails(game) {
    const gameName = document.querySelector(".container h1");
    gameName.innerText = game.name;

    const gameImg = document.querySelector(".image");
    gameImg.style.backgroundImage = `url("${game.background_image}")`;

    const gameDescription = document.querySelector(".description");
    gameDescription.innerHTML = game.description;
}
