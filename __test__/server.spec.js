const app = require('../src/server/app');
const { json } = require('body-parser');
const request = require('supertest');

test("Testing the Weather Request", async () => {

    const weatherUrl = { url: 'https://api.weatherbit.io/v2.0/forecast/daily?days=16&units=I&lat=18.47116&lon=-77.91883&key=09959aeb527c4c0589b4fc648879cd70'};

    const response = await request(app).post("/getWeather").send(weatherUrl);
    expect(response.statusCode).toBe(200);
});