const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bent = require('bent');


let getJson = bent('json');

app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("dist"));
app.listen(process.env.PORT || 3000, () => console.log("Running on Port 3000"));

async function getWeather(request, response) {
    let weatherObj = await getJson(request.body.url);
    return response.send(weatherObj);
}

app.post('/getWeather', getWeather);