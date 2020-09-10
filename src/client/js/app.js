//Import functions here
import {parseDate, getDays} from './countdown';
import {getGeoLocation, getLongitudeLatitude} from './geoNames';
import { getWeatherData } from './weather';
import { getPixaBayData } from './pixabay';
import '../styles/main.scss';



const button = document.getElementById('clickMe');

//CountDown
button.addEventListener("click", (event) => {
    event.preventDefault();
    const startDate = parseDate(document.getElementById('startDate').value);
    const endDate = parseDate(document.getElementById('endDate').value);
    const countDown = getDays(startDate, Date.now());
    getGeoLocation(document.getElementById('city').value).then(data => {
            console.log(data);
            const cityCord = getLongitudeLatitude(data);
            //Get weather data by inputing the city Cordinates and also input the date
            getWeatherData(cityCord, startDate).then(data => printData(data, startDate, endDate, countDown, getPixaBayData));
        }
    );
});

//Get Min and Max Weather Data and display it on the screen
function printData(weatherData, startDate, endDate, countdown, callback){
    console.log(weatherData);
    const startWeather = weatherData.data[weatherData.data.length - 1];
    callback(weatherData.city_name).then(pixaData => {
        const tripSection = document.querySelector('.trip');
        tripSection.appendChild(addTripInfo(weatherData, startDate, endDate, countdown));
        tripSection.appendChild(addTempInfo(startWeather, pixaData));
    });
}


function getRandomInt(num){
    return Math.floor(Math.random() * Math.floor(Math.max(num)));
}

//Gets the CityData and adds it to the screen
function addTripInfo(weatherJson, startDate, endDate, countdown){
    
    //Init Elements
    const tripInfo = document.createElement('div');
    const cityInfo = document.createElement('h3');
    const startElement = document.createElement('p');
    const countElement = document.createElement('p');

    //Init Classes
    tripInfo.classList.add('trip-info');
    cityInfo.classList.add('city-info');

    //Add Text
    cityInfo.textContent = `Trip City: ${weatherJson.city_name}, ${weatherJson.country_code}`;
    startElement.textContent = `Trip Date: ${startDate}`;
    countElement.textContent = `You have ${countdown} days until your trip`;

    //Build Element
    tripInfo.appendChild(cityInfo);
    tripInfo.appendChild(startElement);
    tripInfo.appendChild(countElement);

    return tripInfo;
}

function addTempInfo(startWeather, pixaData){
    const tempInfo = document.createElement('div');
    const img = document.createElement('img');
    const tempSection = document.createElement('div');
    const maxTemp = startWeather.max_temp;
    const minTemp = startWeather.min_temp;

    tempInfo.classList.add("city-temp");

    img.src = pixaData.hits[getRandomInt(pixaData.hits.length - 1)].webformatURL;
    tempSection.textContent = `Max Temp: ${maxTemp} Min Temp: ${minTemp}`;

    tempInfo.appendChild(img);
    tempInfo.appendChild(tempSection);

    return tempInfo

}