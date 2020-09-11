//Get geoLocation
export const getGeoLocation = async (city) => {
    const response = await fetch(`http://api.geonames.org/searchJSON?q=${city}&fuzzy=0.8&username=docjenkins`, {
        method: 'GET',
        headers: {
            "Content-Security-Policy": "default-src http://*.geonames.org"
        }
    });
    return response.json();
}

export const getLongitudeLatitude = (data) => {
    return {
        lat: data.geonames[0].lat,
        lng: data.geonames[0].lng,
        city: data.geonames[0].toponymName,
        cntry: data.geonames[0].countryCode
    }
}