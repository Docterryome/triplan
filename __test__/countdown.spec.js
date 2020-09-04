import { parseDate, getDays } from '../src/client/js/countdown.js';

testSuite("Testing out parse Date", () => { 

    test("Test parse date with 2020-09-01", () => {
        const myDate = parseDate("2020-09-01");
        expect(myDate).toBe(new Date("2020", "09", "01"));
    });
})
