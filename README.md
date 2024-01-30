# Weather App

## Overview
This is a web application that provides weather information, location details, and postal code and weather for the last 7 days to a specific city. The app uses OpenWeatherMap API, Geocoding API for location details, and WEATHERBIT_API for historic data.

## Features
- Display current weather information (temperature, rain volume) for a given city.
- Show the location of the city on a Google Map.
- Show the sunrise and sunset times for a given city.
- Present news articles related to the city.

## Prerequisites
- Node.js installed
- OpenWeatherMap API key
- NewsAPI key
- Google Maps API key

## Getting Started
1. Clone the repository: git clone https://github.com/Dias-Zhaga/weather-app.git
2. Install dependencies: npm install
3. Create a .env file in the root directory with the following keys:
4. Start the application: npm start
5. Open your browser and visit http://localhost:3000

## Configuration
- OPENWEATHER_API_KEY: Obtain your API key from [OpenWeatherMap](https://openweathermap.org/api).
- NEWS_API_KEY: Get your API key from [NewsAPI](https://newsapi.org/docs/get-started).
- MAPBOX_API_KEY: Obtain your API key from [Mapbox](https://docs.mapbox.com/api/overview/#access-tokens-and-token-scopes).

## Usage
1. Enter the name of the city in the search bar.
2. View current weather details, the location on the map, and relevant news articles.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [Express.js](https://expressjs.com/)
- [Axios](https://github.com/axios/axios)
- [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [NewsAPI](https://newsapi.org/)
- [Sunset and Sunrise API](https://sunrisesunset.io/api/)
- [Bootstrap](https://getbootstrap.com/)
- [EJS](https://ejs.co/).
