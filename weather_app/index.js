let now = new Date();

// Get individual time components
let hours = now.getHours();
let minutes = now.getMinutes();

// Format the time string
let formattedTime = `${hours}:${minutes}`;

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let nowDay = document.querySelector("#day");
nowDay.innerHTML = day;

let nowTime = document.querySelector("#time");
nowTime.innerHTML = formattedTime;

function change(event) {
  event.preventDefault(); // Prevent default form submission behavior
  let search_value = document.querySelector(".search-input").value; // Get the search input value
  let h1 = document.querySelector(".current-city"); // Target the <h1> for city name
  h1.innerHTML = search_value; // Set the city name in the header

  // Get weather data for the searched city
  let apiKey = "bob016b0434454afb1b302d4ct21a307"; // Replace with your valid API key
  let url = `https://api.shecodes.io/weather/v1/current?query=${search_value}&key=${apiKey}&units=metric`;

  // Make an API request to fetch weather data
  axios.get(url).then(weather);
}

// Function to update the temperature and other details
function weather(response) {
  console.log(response); // Log the API response for debugging

  // Extract weather data from the API response
  let temp = Math.round(response.data.temperature.current); // Correct way to get current temperature
  console.log(temp); // Log the temperature for debugging

  let currentTemp = document.querySelector(".current-temperature-value"); // Target the temperature element
  currentTemp.innerHTML = `${temp}`; // Update the temperature on the page
}

// Target the form element and add an event listener for submission
let form = document.querySelector("form"); // Assuming the form doesn't have a specific ID
form.addEventListener("submit", change);
