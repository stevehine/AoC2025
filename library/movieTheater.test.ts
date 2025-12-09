import { MovieTheater } from "./movieTheater"

describe("Some tests about movie theaters", () => {
    test("For the example data the largest area is 50", () => {
        const movieTheater = new MovieTheater(["7,1",
            "11,1",
            "11,7",
            "9,7",
            "9,5",
            "2,5",
            "2,3",
            "7,3"]);
        expect(movieTheater.LargestArea).toBe(50);
        expect(movieTheater.LargestAreaInPattern).toBe(24);
    })
})