const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("dist"));
app.listen(8080, () => console.log("Running on Port 8080"));

app.get('/getWeather', (request, response) => { 
    
});