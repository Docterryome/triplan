//Import countdown Libraries
import {getDays} from './countdown';
import { response } from 'express';

//WeatherBit api key
const weatherBitAPI = "http://api.weatherbit.io/v2.0";
const API_KEY = "09959aeb527c4c0589b4fc648879cd70";
const LOCALSERVER = "http://localhost:3000";


export const getWeatherData = async (cityData, date) => {
    let response;
    let weatherURL;
    const daysAhead = getDays(date, Date.now()) + 1;
    //If Date is greater than 16 days get historical date to predict temp
    const dtFormat = new Intl.DateTimeFormat("en", {year: "numeric", mount: "2-digit", day: "2-digit"});
    console.log("Days Ahead: " + daysAhead);
    if( daysAhead < 16){
        weatherURL = { url: `${weatherBitAPI}/forecast/daily?days=${daysAhead}&lat=${cityData.lat}&lon=${cityData.lng}&units=I&key=${API_KEY}`};
        console.log(JSON.stringify(weatherURL));
        response = postData(`${LOCALSERVER}/getWeather`, weatherURL);
        return response.json();
    }
    //Get 16 day forcast
    else{
        const startDate = parseEnDateByYear(dtFormat.format(date), 1);
        const endDate = parseDateAddDays(startDate, 1);
        weatherURL = {url: `${weatherBitAPI}/history/daily&lat=${cityData.lat}&start_date=${startDate}&end_date=${endDate}&lon=${cityData.lng}&units=I&key=${API_KEY}`};
        response = await postData(`${LOCALSERVER}/getWeather`, weatherURL);
        return response.json();
    }
}


export const parseEnDateByYear = (str, year) => {
    const datef = str.split('/');
    return `${parseInt(datef[2]) - year}-${datef[0]}-${datef[1]}`
}

export const parseDateAddDays = (str, days) => {
    const datef = str.split("-");
    return `${datef[0]}-${datef[1]}-${parseInt(datef[2]) + days}`
}

export const postData = async (url, body) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return response;
}