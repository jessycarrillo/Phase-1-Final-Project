# Phase-1-Final-Project
"TapTracker: Find Your Perfect Beer" is a web application designed to help users discover and explore different breweries based on their city preferences. The application allows users to input a city name, and it fetches data from a server (db.json file) to display a list of breweries in that city. Users can then view details about each brewery, including its name, street address, city, state/province, postal code, and brewery type. Additionally, users have the option to add their favorite breweries to a personalized list.

Here's an overview of the key features and components of the code:

1. **Search Functionality**: The core functionality of the application is the ability to search for breweries by city. Users can enter the name of a city in an input field and submit a search query.

2. **Data Fetching**: Upon submitting the search query, the application uses the Fetch API to send a GET request to a specified API endpoint on a server. The server responds with data about breweries in the specified city.

3. **Display of Brewery Data**: The retrieved brewery data is displayed in a structured format on the web page. Each brewery's name, street address, city, state/province, postal code, and brewery type are presented to the user.

4. **Error Handling**: The code includes error handling mechanisms to deal with situations where the server request fails. It displays an alert to the user with an error message if there are any issues with fetching data.

5. **Favorites List**: Users have the option to add breweries to their list of favorites. Each brewery listing includes an "Add to your breweries" button that, when clicked, sends a POST request to a different endpoint on the server to store the favorite brewery data.

6. **Event Listeners**: The code uses event listeners to respond to user interactions, such as submitting the search form or clicking the "Add to your breweries" button.

7. **DOM Manipulation**: The code dynamically updates the DOM (Document Object Model) to display brewery data and manage the favorites list.

This application provides a user-friendly interface for exploring breweries in different cities and keeping track of favorite breweries. It leverages client-server communication to retrieve and store data, making it a practical tool for beer enthusiasts seeking to discover new and interesting breweries in their preferred locations.

The brewery data comes from: https://www.openbrewerydb.org/  

# Setting up

The data comes from https://www.openbrewerydb.org/, but I'm using a Json server to have my data local. You need to install JSON Server globally on your machine:

```
$ npm install -g json-server
```

Then start the server using:

```
$ json-server --watch db.json
```