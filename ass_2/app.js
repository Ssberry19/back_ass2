
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;
require('dotenv').config();

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const city = 'London'; // Replace with your desired city

    // Construct the OpenWeatherAPI URL
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    res.render('index', { data });

  } catch (error) {
    console.error('Error fetching data:', error);
    console.error(error.stack); 
    res.status(500).send('Internal Server Error');
  }  
});

app.use('/leaflet', express.static('node_modules/leaflet/dist'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
