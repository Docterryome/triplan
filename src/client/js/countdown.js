

/* Date format per input: YYYY-MM-DD */
export const parseDate = (str) => {
    const dateArr = str.split("-");
    return new Date(dateArr[0], dateArr[1], dateArr[2]);
};


export const getDays = (date1, date2) => {
    //Miliseconds -> seconds -> hours -> days
    const milisPerDay = 1000 * 60 * 60 * 24;
    return Math.floor(Math.abs(date1 - date2) / milisPerDay);
};