import { parseEnDateByYear, parseDateAddDays} from '../src/client/js/weather.js';


test("Testing Parsing Date Add years", () => {
    const myDate = "09/13/2001";
    expect(parseEnDateByYear(myDate, 1)).toBe("2000-09-13");
});

test("Testing the adding of days", () => {
    const myDate = "2020-04-07";
    expect(parseDateAddDays(myDate, 3)).toBe("2020-04-10");
});