// Question 2
// Make a call to https://api.rawg.io/api/games and pass the JSON object
// it returns to a function called createGames.
// For each game object in the results, the createGames function should create
// the following HTML in a loop. Replace the placeholder values with the relevant properties from each object:
// After the loop, all the HTML that was created should be
// assigned as the innerHTML value to the div with the results class.

const url = "https://api.rawg.io/api/games";

async function fetchGames() {
    try {
        const response = await fetch(url);
        const json = await response.json();
        createGames(json);
    } catch (error) {
        console.log(error);
    }
}

function createGames(json) {
    const resultsContainer = document.querySelector(".results");
    const games = json.results;
    console.log(games);

    let html = "";

    for (i = 0; i < games.length; i++) {
        html += `<div class="game">
                    <h2>${games[i].name}</h2>
                    <img src="${games[i].background_image}" alt="${games[i].name}" />
                </div>`;
    }

    resultsContainer.innerHTML = html;
}

fetchGames();
