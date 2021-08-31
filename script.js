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
    let keyword = searchForm.elements.search.value;
    searchFoods(keyword);
    searchForm.reset();
})

async function searchFoods(keyword) {
    // Ensure that it doesn't give you foods of the BRANDED datatype
    const dataTypes = ["Foundation", "SR Legacy"];
    try {
        const res = await fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=' + APIKey
        + '&query=' + keyword + '&dataType=' + dataTypes);
        const data = await res.json();
        console.log(data);
        if (data.totalHits < 1) {
            searchResults.innerText = "No data for this item could be found."
        }
        else {
            // Seems to have a length of 50 per page:
            const arr = data.foods;
            searchResults.innerText = "";
            for(let i=0; i<arr.length; i++) {
                const entry = document.createElement("div");
                const entryCals = arr[i].foodNutrients.filter(n => n.unitName == 'KCAL')[0].value;
                const entryContent = document.createTextNode(arr[i].description + '    ' + entryCals);
                console.log(entryCals);
                entry.classList.add('entry');
                entry.appendChild(entryContent);
                searchResults.appendChild(entry);
            }
        }
        // Display results:
        searchResults.style.display = "block";
    }
    catch (err) {
        console.log("Search Error:\n" + err);
    }
}