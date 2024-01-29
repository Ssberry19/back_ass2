// weather.js

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('searchForm');
  
  searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value.trim();

    if (city) {
      try {
        const response = await fetch(`/weather?city=${city}`);
        const data = await response.json();
        
        displayWeatherData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error gracefully in the UI
      }
    } else {
      // Handle empty city input in the UI
    }
  });
});

function displayWeatherData(data) {
  const weatherInfoElement = document.getElementById('weatherInfo');
  
  // Clear previous content in weatherInfoElement
  weatherInfoElement.innerHTML = '';

  if (data && data.main && data.weather && data.weather.length > 0) {
    const temperatureElement = document.createElement('p');
    const descriptionElement = document.createElement('p');

    const temperatureCelsius = data.main.temp - 273.15; // Convert Kelvin to Celsius
    temperatureElement.innerText = `Temperature: ${temperatureCelsius.toFixed(2)} °C`;

    descriptionElement.innerText = `Description: ${data.weather[0].description}`;

    // Append elements to weatherInfoElement
    weatherInfoElement.appendChild(temperatureElement);
    weatherInfoElement.appendChild(descriptionElement);
  } else {
    // Display a message when no weather data is available
    weatherInfoElement.innerText = 'No weather data available';
  }
}
