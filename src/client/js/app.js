//Import functions here
import {parseDate, getDays} from './countdown';
import {getGeoLocation, getLongitudeLatitude} from './geoNames';
import { getWeatherData } from './weather';
import { getPixaBayData } from './pixabay';
import '../styles/main.scss';
import 'bootstrap';



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
    callback(document.getElementById('city').value).then(pixaData => {
        addTripInfo(weatherData, startDate, endDate, countdown);
        addImages(pixaData);
    });
}


function getRandomInt(num){
    return Math.floor(Math.random() * Math.floor(Math.max(num)));
}

//Gets the CityData and adds it to the screen
function addTripInfo(weatherJson, startDate, endDate, countdown){
    
    //Init Elements
    const tripInfo = document.querySelector('.trip-info');
    const cityInfo = document.createElement('h3');
    const startElement = document.createElement('p');
    const countElement = document.createElement('p');
    const tempInfo = document.createElement('p');
    const tripLengthElement = document.createElement('p');
    const tripLength = getDays(startDate, endDate);

    //Get Weather
    const startWeather = weatherJson.data[weatherJson.data.length - 1];
    
    //Clear tripInfo
    tripInfo.innerHTML = '';

    //Add Text
    cityInfo.textContent = `${weatherJson.city_name}, ${weatherJson.country_code}`;
    countElement.textContent = `You have ${countdown} days until your trip`;
    startElement.innerHTML = `<b>Start Date:</b> ${startDate.toDateString()}`;
    tempInfo.innerHTML = `<em>Estimated Temp:</em> Low: ${startWeather.min_temp}&deg; &rightarrow; High: ${startWeather.max_temp}&deg;`;
    tripLengthElement.textContent = `The length of your trip: ${tripLength} days`

    //Build Element
    tripInfo.appendChild(cityInfo);
    tripInfo.appendChild(countElement);
    tripInfo.appendChild(startElement);
    tripInfo.appendChild(tempInfo);
    tripInfo.appendChild(tripLengthElement);
    

    console.log(tripInfo);

    return tripInfo;
}

function addImages(pixaData){
    const carousel = document.querySelector('.carousel-inner');
    carousel.innerHTML = '';
    pixaData.hits.forEach( item => {
        const carItem = document.createElement('div');
        const img = document.createElement('img');
        carItem.classList.add('carousel-item');
        img.src = item.webformatURL;
        img.alt = item.tags;
        
        carItem.appendChild(img);
        carousel.appendChild(carItem);
    });
    //set active
    const innerCarousel = document.querySelector('.carousel-item');
    innerCarousel.classList.add('active');
}

