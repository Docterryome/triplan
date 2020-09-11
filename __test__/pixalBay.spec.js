import {getPixaBayData} from '../src/client/js/pixabay';


test("Get pixaBay Data", () => {
    getPixaBayData("New York").then(data => {
        expect(data.hits).toBeTruthy();
    })
})