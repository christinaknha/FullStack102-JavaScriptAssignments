
let zipCode = document.getElementById("zipCodeEntry").value
// let zipCode = 28270
let apiKey = `ea316c4223dde35438426450a5abcc54`;
let apiLink = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&appid=${apiKey}&units=imperial`

// CALL WEATHER API
function weatherInfo() {
    fetch(apiLink)
    .then((response) => response.json())
    .then((json) => console.log(json))
}

// FIND CURRENT CITY
function currentCity() {
    fetch (apiLink)
    .then((response) => response.json())
    .then((json) => displayCityName(json.name))
}
// FUNCTION TO DISPLAY DATA
function displayCityName(jsonData) {
    let dataToDisplay = document.getElementById("currentCity");
    let data =jsonData
    dataToDisplay.innerHTML = data;
}
// FIND CURRENT DATE
    let thisMoment = Date.now();
    let today = new Date(thisMoment);
    // console.log(today)
    let theDate = today.toDateString();
    // console.log(theDate)

// FUNCTION TO DISPLAY DATA
function displayDateData(dateInfo) {
    let dataToDisplay = document.getElementById("currentDate");
    let data = theDate
    dataToDisplay.innerHTML = data;
}

// let date = new Date();
// console.log(date)
// let currentYear = date.getFullYear();
// let currentMonth = date.getMonth();
// let currentDay = date.getDate();

// FIND CURRENT TEMP
function currentTemp() {
    fetch (apiLink)
    .then((response) => response.json())
    .then((json) => displayCurrentTemp(json.main.temp))
}
// FUNCTION TO DISPLAY DATA
function displayCurrentTemp(jsonData) {
    let dataToDisplay = document.getElementById("currentTemp");
    let data =jsonData
    dataToDisplay.innerHTML = data + "F";
}

//  FIND CURRENT CONDITIONS
function currentConditions(){
    fetch(apiLink)
    .then((response) => response.json())
    .then((json) => displayCurrentCond(json.weather[0].main))
}
// FUNCTION TO DISPLAY DATA
function displayCurrentCond(jsonData) {
    let dataToDisplay = document.getElementById("currentCondition");
    let data =jsonData
    dataToDisplay.innerHTML = data;
}

// find Temp Hi/Low
function findHigh(){
    fetch(apiLink)
    .then((response) => response.json())
    .then((json) => displayH(json.main.temp_max))
}

function findLow() {
    fetch(apiLink)
    .then((response) => response.json())
    .then((json) => displayL(json.main.temp_min))
}

// FUNCTION TO DISPLAY DATA
function displayH(jsonData) {
    let dataToDisplay = document.getElementById("High");
    let data =jsonData
    dataToDisplay.innerHTML = "H: " + data + " F";
}


// FUNCTION TO DISPLAY DATA
function displayL(jsonData) {
    let dataToDisplay = document.getElementById("Low");
    let data =jsonData
    dataToDisplay.innerHTML = "L: " + data + " F";
}


// addEvent Listener for cityZipSearch
let searchButton = document.getElementById("cityZipSearch");
searchButton.addEventListener("click", () => {
    currentCity();
    displayDateData(theDate);
    currentTemp();
    currentConditions();
    findHigh();
    findLow();

})


/*Stupid code and wasted time trying to GET LONG AND LAT FROM GEO API
let getLat = function(){
    fetch ('http://api.openweathermap.org/geo/1.0/zip?zip=28270,US&appid=ea316c4223dde35438426450a5abcc54')
.then((response) => response.json())
.then((json) => latInfo = json.lat)
// .then(() => console.log(latInfo))
}

let getLon = function(){
    let lonInfo = 0;
    fetch ('http://api.openweathermap.org/geo/1.0/zip?zip=28270,US&appid=ea316c4223dde35438426450a5abcc54')
.then((response) => response.json())
.then((json) => lonInfo = json.lon)
// .then(() => console.log(lonInfo))
}

let getLat = fetch ('http://api.openweathermap.org/geo/1.0/zip?zip=28270,US&appid=ea316c4223dde35438426450a5abcc54')
.then((response) => response.json())
.then((json) => latInfo = json.lat)
.then(() => console.log(latInfo))

let getLon = fetch ('http://api.openweathermap.org/geo/1.0/zip?zip=28270,US&appid=ea316c4223dde35438426450a5abcc54')
.then((response) => response.json())
.then((json) => lonInfo = json.lon)
.then(() => console.log(lonInfo))*/