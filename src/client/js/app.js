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
    console.log(startDate);
    console.log(endDate);
    console.log(getDays(startDate, Date.now()));
    getGeoLocation(document.getElementById('city').value).then(data => {
            console.log(data);
            const cityCord = getLongitudeLatitude(data);
            //Get weather data by inputing the city Cordinates and also input the date
            getWeatherData(cityCord, startDate).then(data => printData(data, getPixaBayData));
        }
    );
});


function printData(weatherData, callback){
    console.log(weatherData);
    console.log(weatherData.data[weatherData.data.length - 1]);
    callback(weatherData.city_name).then(pixaData => {
        console.log(pixaData);
    })
}

function getPixaBay(searchInfo){
    console.log("GitPixaBay stuff " + searchInfo);
}