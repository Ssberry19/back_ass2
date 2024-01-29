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
    
    // Retrieve the city from the query parameter, defaulting to 'London'
    const city = req.query.city || 'London';

    // Construct the OpenWeatherAPI URL
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log('API Data:', data); // Log the entire data object
 

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
