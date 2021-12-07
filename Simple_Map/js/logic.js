// Add console.log to check to see if our code is working.
console.log("working");
console.log("Coding Can be Difficult");

// Create the map object with a center and zoom level.
// Create the map object with a center and zoom level.
let map = L.map("mapid", {
  center: [
    37.09, -95.71
  ],
  zoom:5
});
//  Add a marker to the map for Los Angeles, California.


// Add a tile layer (the background map image) to our map
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    zooOffset: -1,
    accessToken: API_KEY
});

// Get data from cities.js
let cityData = cities;
// Loop through the cities array and create one marker for each city.
// Loop through the cities array and create one marker for each city.
// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.marker(city.location)
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString + "</h3>")
  .addTo(myMap);
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);