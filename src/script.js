let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let currentDay = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let currentMonth = months[now.getMonth()];
let currentDate = now.getDate();
let currentHour = now.getHours();
let currentMinute = now.getMinutes();

if (currentMinute < 10) {
  currentMinute = `0${currentMinute}`;
}
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}

let realTimeDate = document.querySelector(".currentdate");
realTimeDate.innerHTML = `${currentDay}, ${currentDate} ${currentMonth}`;

let realTimeTime = document.querySelector(".currenttime");
realTimeTime.innerHTML = `GMT ${currentHour}:${currentMinute}`;

function updateInfo(response) {
  let searchedCity = document.querySelector(".currentcity");
  searchedCity.innerHTML = response.data.name;
  let temp = Math.round(response.data.main.temp);
  let tempElement = document.querySelector(".currenttemperature");
  tempElement.innerHTML = `${temp} C°`;
}

function searchCity(event) {
  event.preventDefault();
  let apiKey = "36627385a0b4fa9441ba14c41f6e63ca";
  let city = document.querySelector("#search-city").value;
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  axios.get(apiUrl).then(updateInfo);
}

let cityForm = document.querySelector("form");
cityForm.addEventListener("submit", searchCity);
