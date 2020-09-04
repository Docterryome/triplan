import { parseDate, getDays } from '../src/client/js/countdown.js';



test("Test parse date with 2020-09-01", () => {
    const myDate = parseDate("2020-09-01");
    expect(myDate).toStrictEqual(new Date("2020", "09", "01"));
});
