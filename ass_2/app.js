//app.js
const path = require('path')
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;
require('dotenv').config();

app.use('/', express.static(path.join(__dirname, "/views")));

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get('/', async (req, res) => {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    
    const city = req.query.city || 'Astana';

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log('API Data:', data); 
 
    /*const historicalWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${data.coord.lat}&lon=${data.coord.lon}&dt=${Math.floor(Date.now() / 1000) - 10800}&appid=${apiKey}&units=metric`;
    const historicalWeatherResponse = await fetch(historicalWeatherUrl);
    const historicalWeatherData = await historicalWeatherResponse.json();
    console.log('Historical Weather Data:', historicalWeatherData);
    res.render('index', { data: historicalWeatherData });*/

    
    res.render('index', { data });
  } catch (error) {
    console.error('Error fetching data:', error);
    console.error(error.stack); 
    res.status(500).send('Internal Server Error');
  }  
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
