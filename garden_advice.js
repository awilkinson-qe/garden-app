// Hardcoded values for the season and plant type
// Define variables to hold user input for season and plant type
let season = prompt("Enter the season (e.g., summer, winter):").toLocaleLowerCase();
let plantType = prompt("Enter the type of plant (e.g., flower, vegetable):").toLocaleLowerCase();

// Function to get advice based on season
function getSeasonAdvice(season) {
    if (season === "summer") {
        // Return instead of advice += to avoid side effects and improve modularity
        return "Water your plants regularly and provide some shade.\n";
    } else if (season === "winter") {
        return "Protect your plants from frost with covers.\n";
    } else {
        return "No advice for this season.\n";
    }
}

// Function to get advice based on plant type
function getPlantAdvice(plantType) {
    if (plantType === "flower") {
        return "Use fertiliser to encourage blooms.";
    } else if (plantType === "vegetable") {
        return "Keep an eye out for pests!";
    } else {
        return "No advice for this type of plant.";
    }
}

// Combine the advice
let advice = getSeasonAdvice(season) + getPlantAdvice(plantType);

// Log the generated advice to the console
console.log(advice);

// TODO: Examples of possible features to add:
// - Add detailed comments explaining each block of code.
// - Refactor the code into functions for better readability and modularity.
// - Store advice in an object for multiple plants and seasons.
// - Suggest plants that thrive in the given season.