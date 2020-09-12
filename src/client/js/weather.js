//Import countdown Libraries
import {getDays} from './countdown';
import {postData} from './request';

//WeatherBit api key
const weatherBitAPI = "https://api.weatherbit.io/v2.0";
const API_KEY = process.env.WEATHERBIT_KEY;
let request = '/getWeather';

if(process.env.NODE_ENV === 'development'){
    request = 'http://localhost:3000/getWeather';
}


export const getWeatherData = async (cityData, date) => {
    let response;
    let weatherURL;
    const daysAhead = getDays(date, Date.now()) + 1;
    //If Date is greater than 16 days get historical date to predict temp
    const dtFormat = new Intl.DateTimeFormat("en", {year: "numeric", month: "2-digit", day: "2-digit"});
    console.log("Days Ahead: " + daysAhead);
    if( daysAhead < 16){
        weatherURL = { url: `${weatherBitAPI}/forecast/daily?days=${daysAhead}&lat=${cityData.lat}&lon=${cityData.lng}&units=I&key=${API_KEY}`};
        console.log(JSON.stringify(weatherURL));
        response = await postData(request, weatherURL);
        return response.json();
    }
    //Get 16 day forcast
    else{
        console.log(dtFormat.format(date));
        const startDate = parseEnDateByYear(dtFormat.format(date), 1);
        const endDate = parseDateAddDays(startDate, 1);
        weatherURL = {url: `${weatherBitAPI}/history/daily?lat=${cityData.lat}&start_date=${startDate}&end_date=${endDate}&lon=${cityData.lng}&units=I&key=${API_KEY}`};
        response = await postData(`/getWeather`, weatherURL);
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

