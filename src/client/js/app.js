//Import functions here
import {parseDate, getDays} from './countdown';
import {getGeoLocation, getLongitudeLatitude} from './geoNames';



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
            console.log(cityCord);
        }
    );
});