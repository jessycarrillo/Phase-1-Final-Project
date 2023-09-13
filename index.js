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