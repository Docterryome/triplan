//Create a form in the UI and have the variables elements in here
import {parseDate, getDays} from './countdown';
//Create an array of start date and end date objects

const button = document.getElementById('clickMe');


button.addEventListener("click", () =>{
    const startDate = parseDate(document.getElementById('startDate').value);
    const endDate = parseDate(document.getElementById('endDate').value);
    console.log(startDate);
    console.log(endDate);
    console.log(getDays(startDate, endDate));
});