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
        const li = document.createElement("li")
        const h3 =  document.createElement("h3")
        h3.textContent = brewery.name; 
        li.appendChild(h3);
        const address = document.createElement("address");
        address.appendChild(document.createTextNode(brewery.street))
        address.appendChild(document.createElement("br"))
        address.appendChild(document.createTextNode(brewery.city))
        address.appendChild(document.createElement("br"))
        address.appendChild(document.createTextNode(brewery.state_province))
        address.appendChild(document.createElement("br"))
        address.appendChild(document.createTextNode(brewery.postal_code))
        li.appendChild(address) 
        const pType = document.createElement("p")
        pType.textContent = `This is a ${brewery.brewery_type} brewery`;
        li.appendChild(pType) 
        
        const favButton = document.createElement("button");
        favButton.textContent = "Add to your breweries";
        favButton.addEventListener("click", () => {
                favoritesList(brewery);
        });
        li.appendChild(favButton);
        breweryList.appendChild(li);
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
    const h3Text = "Favorite breweries";
    const favoriteBreweryHeader = document.getElementById("Favorites-container");
    const breweryList = document.getElementById("favorites-list");
    const existingH3 = favoriteBreweryHeader.querySelector("h3");
    if (!existingH3 || existingH3.textContent !== h3Text) {
        const h3 = document.createElement("h3");
        h3.textContent = h3Text;
        favoriteBreweryHeader.insertBefore(h3, breweryList);
    }
    const listItem = document.createElement("li");
          listItem.textContent = brewery.name;
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = " x ";
    deleteButton.addEventListener("click", () => {
        //DON'T FORGET add function here that handle delete;
    });
    listItem.appendChild(deleteButton);
    breweryList.appendChild(listItem);
    

}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("TapTracker-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const userInput = document.getElementById("search").value;
        searchBreweriesbyCity(userInput);
       
        
    });
});