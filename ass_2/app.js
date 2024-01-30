//app.js
const path = require('path')
const express = require('express');
const fetch = require('node-fetch');
const axios = require('axios');

const app = express();
const port = 3000;
require('dotenv').config();

app.use('/', express.static(path.join(__dirname, "/views")));

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get('/', async (req, res) => {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const apiKey1 = process.env.WEATHERBIT_API_KEY;
    
    const city = req.query.city || 'Astana';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();
   
    const { coord } = data;

    if (coord) {

      const timeZoneApiUrl = `https://maps.googleapis.com/maps/api/timezone/json?location=${coord.lat},${coord.lon}&timestamp=${Math.floor(Date.now() / 1000)}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
      const timeZoneResponse = await axios.get(timeZoneApiUrl);
      const timeZoneData = timeZoneResponse.data;

      const geocodingApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coord.lat},${coord.lon}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

      const geocodingResponse = await axios.get(geocodingApiUrl);
      const geocodingData = geocodingResponse.data;
      const postalCode = geocodingData.results[0].address_components.find(component => component.types.includes('postal_code'))?.long_name;

      const weatherbitApiUrl = `https://api.weatherbit.io/v2.0/history/daily?postal_code=${postalCode}&country=${data.sys.country}&start_date=2024-01-23&end_date=2024-01-30&key=${apiKey1}`;

      const weatherbitResponse = await axios.get(weatherbitApiUrl);
      const weatherbitData = weatherbitResponse.data;
      console.log('API Data:',  weatherbitData); 

      res.render('index', { data, timeZoneData, weatherbitData, postalCode });
    } else {
      
      res.status(500).send('Internal Server Error: No coordinates available');
    }

  } catch (error) {
    console.error('Error fetching data:', error);
    console.error(error.stack); 
    res.status(500).send('Internal Server Error');
  }  
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
