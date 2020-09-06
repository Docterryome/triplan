//Import countdown Libraries
import {getDays} from './countdown';
import { initial } from 'lodash';

//WeatherBit api key
const weatherBitAPI = "http://api.weatherbit.io/v2.0"
const API_KEY = "09959aeb527c4c0589b4fc648879cd70"


export const getWeatherData = async (cityData, date) => {
    let response;
    const daysAhead = getDays(date, Date.now());
    //If Date is greater than 16 days get historical date to predict temp
    const dtFormat = new Intl.DateTimeFormat("en", {year: "numeric", mount: "2-digit", day: "2-digit"});
    console.log("Days Ahead: " + daysAhead);
    if( daysAhead < 16){
        let weatherURL = { url: `${weatherBitAPI}/forecast/daily?days=${daysAhead}&lat=${cityData.lat}&lon=${cityData.lng}&units=I&key=${API_KEY}`};
        console.log(JSON.stringify(weatherURL));
        response = await fetch('/getWeather', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(weatherURL)
        });
        return response.json();
    }
    //Get 16 day forcast
    else{
        return "";
    }
}


const parseEnDate = (str) => {
    const datef = str.split('/');
    return `${datef[2]}-${datef[0]}-${datef[1]}`
}