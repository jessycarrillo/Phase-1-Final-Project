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
    });
}