//Import functions here
import {parseDate, getDays} from './countdown';
import {getGeoLocation, getLongitudeLatitude} from './geoNames';
import { getWeatherData } from './weather';
import { getPixaBayData } from './pixabay';



const button = document.getElementById('clickMe');

//CountDown
button.addEventListener("click", () => {
    const startDate = parseDate(document.getElementById('startDate').value);
    const endDate = parseDate(document.getElementById('endDate').value);
    const countDown = getDays(startDate, Date.now());
    getGeoLocation(document.getElementById('city').value).then(data => {
            console.log(data);
            const cityCord = getLongitudeLatitude(data);
            //Get weather data by inputing the city Cordinates and also input the date
            getWeatherData(cityCord, startDate).then(data => printData(data, getPixaBayData));
        }
    );
});

//Get Min and Max Weather Data and display it on the screen
function printData(weatherData, callback){
    console.log(weatherData);
    const startWeather = weatherData.data[weatherData.data.length - 1];
    callback(weatherData.city_name).then(pixaData => {
        const img = document.createElement('img');
        const temp = document.createElement('div');
        img.src = pixaData.hits[getRandomInt(pixaData.hits.length - 1)].webformatURL;
        document.body.appendChild(img);
        const maxTemp = startWeather.max_temp;
        const minTemp = startWeather.min_temp;
        temp.textContent = `Max Temp: ${maxTemp} Min Temp: ${minTemp}`;

    });
}


function getRandomInt(num){
    return Math.floor(Math.random() * Math.floor(Math.max(num)));
}
