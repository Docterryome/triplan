//Import functions here
import {parseDate, getDays} from './countdown';
import {getGeoLocation, getLongitudeLatitude} from './geoNames';
import { getWeatherData } from './weather';



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
            getWeatherData(cityCord, startDate).then(data => printData(data, getPixaBay));
        }
    );
});


function printData(weatherData){
    console.log(weatherData.data);
    console.log(weatherData.data[weatherData.data.length - 1]);
}

function getPixaBay(){

}