function searchBreweriesbyCity(userInput) {
    // add the operator _like to the URL to search case unsensitive and with cities that contains https://github.com/typicode/json-server/issues/530
    const searchBrewerybyCity = `http://localhost:3000/breweries?city_like=${userInput}`; 
    fetch(searchBrewerybyCity, {
        method: "GET",
        
    })
    .then(response => {return(response.json()) }) 
    .then(data => {
        const breweryData = data;     
        handleBreweries(breweryData)       
    })
    .catch(error => {
        alert("Error fetching data:", error); 
    });
}
function handleBreweries(breweryData) {
    const breweryList = document.getElementById("breweries-list");
    breweryList.innerHTML = "";
    breweryData.forEach(brewery => {
        const breweryName = document.createElement("h3");
        breweryName.textContent = brewery.name; 
        breweryList.appendChild(breweryName);

        const breweryStreet = document.createElement("li");
        breweryStreet.textContent = brewery.street; 
        breweryList.appendChild(breweryStreet);
        
        const breweryCity = document.createElement("li");
        breweryCity.textContent = brewery.city; 
        breweryList.appendChild(breweryCity);

        const breweryState = document.createElement("li");
        breweryState.textContent = brewery.state_province; 
        breweryList.appendChild(breweryState);

        const breweryZipCode = document.createElement("li");
        breweryZipCode.textContent = brewery.postal_code; 
        breweryList.appendChild(breweryZipCode);

        const breweryType = document.createElement("li");
        breweryType.textContent = `This is a ${brewery.brewery_type} brewery`; 
        breweryList.appendChild(breweryType);

        const favButton = document.createElement("button");
        favButton.textContent = "Add to your breweries";
        favButton.addEventListener("click", () => {
                favoritesList(brewery);
                
        });

        breweryList.appendChild(favButton);
    });
}

function favoritesList(data) {
    console.log(data)
    const config = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"name": data.name})
    };

    fetch("http://localhost:3000/favorites_Breweries", config)
    .then(response => response.json()) 
    .then(json => handleFavoriteBrewery(json));
}
function handleFavoriteBrewery(brewery) {
    const favoriteBrewery = document.getElementById("favorites-list");
    const h3 = document.createElement ("h3")
    h3.textContent = "Favorite breweries"
    const breweryName = document.createElement("li");
    breweryName.textContent = brewery.name;
    favoriteBrewery.appendChild(h3); 
    favoriteBrewery.appendChild(breweryName); 
    
}  

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("TapTracker-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const userInput = document.getElementById("search").value;
        searchBreweriesbyCity(userInput);
       
        
    });
});