import {getGeoLocation, getLatitudeLongitude } from '../src/client/js/geoNames';

test("Get name of city",  () => {
    getGeoLocation("New York").then(data => {
        expect(data.geonames[0].toponymName).toBe("New York City");
    });
});