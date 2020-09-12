const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bent = require('bent');


let getJson = bent('json');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("dist"));

async function getWeather(request, response) {
    let weatherObj = await getJson(request.body.url);
    return response.status(200).send(weatherObj);
}

app.post('/getWeather', getWeather);

module.exports = app;

