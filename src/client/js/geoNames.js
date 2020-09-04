//Get geoLocation
export const getGeoLocation = async (city) => {
    const response = await fetch(`http://api.geonames.org/searchJSON?q=${city}&fuzzy=0.8&username=docjenkins`);
    return response.json();
}