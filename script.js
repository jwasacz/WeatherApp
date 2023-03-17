const input = document.querySelector("input");
const button = document.querySelector("button");
const cityName = document.querySelector(".city-name");
const warning = document.querySelector(".warning");
const photo = document.querySelector(".photo");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");

const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "&appid=44a6afceee7d1e26324f52a8093cbb1e";
const API_UNITS = "&units=metric";

const getWeather = () => {
  const city = input.value ;
  const URL = API_LINK + city + API_KEY + API_UNITS;

  axios
    .get(URL)
    .then((res) => {
      const temp = res.data.main.temp;
      const hum = res.data.main.humidity;
      const wth = res.data.weather[0].main;

      const object = res.data.weather[0].id;

      cityName.textContent = res.data.name;
      temperature.textContent = Math.floor(temp) + "°C";
      humidity.textContent = hum + "%";
      weather.textContent = wth;

      input.value = "";
      warning.textContent = " ";
   

      if (object >= 200 && object < 300) {
        photo.setAttribute("src", "./img/thunderstorm.png");
      } else if (object >= 300 && object < 400) {
        photo.setAttribute("src", "./img/drizzle.png");
      } else if (object >= 400 && object < 500) {
        photo.setAttribute("src", "./img/rain.png");
      } else if (object >= 500 && object < 600) {
        photo.setAttribute("src", "./img/ice.png");
      } else if (object >= 600 && object < 700) {
        photo.setAttribute("src", "./img/fog.png");
      } else if (object >= 700 && object < 800) {
        photo.setAttribute("src", "./img/sun.png");
      } else if (object >= 700 && object < 800) {
        photo.setAttribute("src", "./img/cloud.png");
      } else {
        photo.setAttribute("src", "./img/unknown.png");
      }
    })
    .catch(() => (warning.textContent = "Enter correct city name!"));
};

const enterCheck = (e) => {
  id(e.key === "Enter");
  {
    getWeather();
  }
};

input.addEventListener("keyup", enterCheck);

getWeather();
button.addEventListener("click", getWeather);
