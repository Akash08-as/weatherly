import { fetchWeatherData } from './weathapi.js';

const citySelect = document.getElementById("city-select");
const loader = document.getElementById("loader");
const errorContainer = document.getElementById("error-container");
const weatherContent = document.getElementById("weather-content");
const currentWeatherContainer = document.getElementById("current-weather-container");

function getWeatherIconHTML(description) {
  if (description.includes("clear")) return "☀️";
  if (description.includes("cloud")) return "☁️";
  if (description.includes("rain")) return "🌧";
  if (description.includes("snow")) return "❄️";
  if (description.includes("storm")) return "⚡";
  return "🌡";
}

function updateBackground(description) {
  if (description.includes("clear")) {
    document.body.style.backgroundImage = "url('images/clear-sky.jpg')";
  } else if (description.includes("cloud")) {
    document.body.style.backgroundImage = "url('images/cloudy.jpg')";
  } else if (description.includes("rain")) {
    document.body.style.backgroundImage = "url('images/rainy.jpg')";
  } else if (description.includes("snow")) {
    document.body.style.backgroundImage = "url('images/snow.jpg')";
  } else if (description.includes("storm")) {
    document.body.style.backgroundImage = "url('images/storm.jpg')";
  } else {
    document.body.style.backgroundImage = "url('images/haze.jpg')";
  }

  // Make sure it covers the whole page
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
}

citySelect.addEventListener("change", async function () {
  const selectedCity = this.value;
  loader.style.display = "block";
  errorContainer.innerText = "";

  try {
    const data = await fetchWeatherData(selectedCity);

    if (data.error) {
      errorContainer.innerText = data.error;
      weatherContent.style.display = "none";
    } else {
      currentWeatherContainer.innerHTML = `
        <h3>${data.city}</h3>
        <p>${getWeatherIconHTML(data.description)} ${data.description}</p>
        <p>Temperature: ${data.temperature} °C</p>
        <p>Humidity: ${data.humidity} %</p>
      `;
      updateBackground(data.description);
      weatherContent.style.display = "block";
    }
  } catch (err) {
    errorContainer.innerText = "Failed to fetch weather data.";
  } finally {
    loader.style.display = "none";
  }
});

