// ACCESS CODE for FoodData Central database for me@jamesyoannou.com:
// R0m9UmYNvrMIrKcaSTRoLAeZYVDlWhnXW8ZWSDXL

console.log("Script loaded.")

// CONSTANTS
const APIKey = 'R0m9UmYNvrMIrKcaSTRoLAeZYVDlWhnXW8ZWSDXL'
const egg = fetchFoodItem(747997)
const searchForm = document.getElementById('food-search-form');
const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');

// The following will interleave with the fetchFoodItem, potentially causing an error:
// const eggCalories = getCalories(egg)

// Get all data for a single food item
async function fetchFoodItem(fdcid) {
    try {
        const res = await fetch('https://api.nal.usda.gov/fdc/v1/food/' + fdcid + '?api_key=' + APIKey);
        const foodItem = await res.json();
        console.log(foodItem)
        return foodItem;
    }
    catch (err) {
        console.log("Error retrieving data from FoodData server:\n" + err);
    }
}

// Get the calories from a retrieved food item
async function getCalories(foodItem) {
    const item = await foodItem;
    return item.foodNutrients[2].amount;
}

// Search form
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchFoods();
    searchForm.reset();
    /*
    let keyword = searchForm.elements.search.value;
    let t = "Results for: " +  keyword;
    console.log(keyword)
    searchResults.style.display = "block";
    searchResults.innerText = t;
    searchResults.innerText += "\n\n" + keyword;
    e.preventDefault();
    */
})

async function searchFoods() {
    let keyword = searchForm.elements.search.value;
    console.log(keyword);
}