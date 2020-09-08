
const pixaBayAPI = "https://pixabay.com/api/";
const apiKey = "18199976-3b9dec90f3972713b15836d35";
export const getPixaBayData = async (searchQuery) => {
    const searchParam = plusURI(searchQuery);
    console.log(searchParam);
    const response = await fetch(`${pixaBayAPI}?key=${apiKey}&q=${searchParam}`);
    return response.json();
}

function plusURI(str) {
    return str.replace(" ", "+");
}