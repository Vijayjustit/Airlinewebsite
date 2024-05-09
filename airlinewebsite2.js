const apiKey = "bfa521966e6337b32bb2cd008da78faf";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let myLocation;
let londonButton = document.querySelector(".btn1");
let vancouverButton = document.querySelector(".btn2");
let sydneyButton = document.querySelector(".btn3");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);
    console.log(location);

    document.querySelector(".city").innerHTML = "in " + data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "cloudyweather.jpg";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "clearweather.jpeg";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "rainweather.jpeg";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "lightrainweather.jpeg";
    } else if (data.weather[0].main == "Humid") {
      weatherIcon.src = "humidweather.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "snowweather.jpeg";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "mistweather.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

const weekdayapi = 
// const newUrl =

async function weekweather(city) {
  const weekresponse = await fetch(newUrl + city + `&appid=${weekdayapi}`);
  if(!weekresponse.ok){
    console.error("Fetch failed")
  } else{
    console.log("Response successful")
  }
  try {
// code from video
  }catch (error) {
    console.error("Code failed; ", error)
  }
}

londonButton.addEventListener("click", () => {
  myLocation = londonButton.innerText;
  checkWeather(myLocation);
  weekweather(myLocation);

});


vancouverButton.addEventListener("click", () => {
    myLocation = vancouverButton.innerText;
    checkWeather(myLocation);
  });
 
sydneyButton.addEventListener("click", () => {
    myLocation = sydneyButton.innerText;
    checkWeather(myLocation);
  });