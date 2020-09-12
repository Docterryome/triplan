
const pixaBayAPI = "https://pixabay.com/api/";
const apiKey = process.env.PIXABAY_KEY;
export const getPixaBayData = async (searchQuery) => {
    const searchParam = plusURI(`${searchQuery} city`);
    console.log(searchParam);
    const response = await fetch(`${pixaBayAPI}?key=${apiKey}&q=${searchParam}`);
    return response.json();
}

function plusURI(str) {
    return str.split(" ").join("+");
}