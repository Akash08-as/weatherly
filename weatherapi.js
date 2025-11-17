export async function fetchWeatherData(city) {
  try {
    const response = await fetch(`weather.php?city=${encodeURIComponent(city)}`);
    return await response.json();
  } catch (err) {
    console.error("Error fetching weather data:", err);
    return { error: "Failed to fetch weather data" };
  }
}
