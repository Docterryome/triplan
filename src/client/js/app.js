//Create a form in the UI and have the variables elements in here
import {parseDate, getDays} from './countdown';
import {getGeoLocation} from './geoNames';

//Create an array of start date and end date objects

const button = document.getElementById('clickMe');


//CountDown
button.addEventListener("click", () =>{
    const startDate = parseDate(document.getElementById('startDate').value);
    const endDate = parseDate(document.getElementById('endDate').value);
    console.log(startDate);
    console.log(endDate);
    console.log(getDays(startDate, endDate));
    getGeoLocation("Memphis").then(data => {console.log(data)});

});