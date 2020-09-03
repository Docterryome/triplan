//Create a form in the UI and have the variables elements in here

//Create an array of start date and end date objects

const datesArray = [];


const parseDate = (str) => {
    const dateArr = str.split("-");
    return new Date(dateArr[0], dateArr[1], dateArr[2]);
}
