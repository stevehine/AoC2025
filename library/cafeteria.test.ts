import { Cafeteria } from "./cafeteria"

describe("Some tests about the cafeteria", () => {
    test("Given the example inventory there should be 3 fresh ingredients", () => {
        const cafeteria = new Cafeteria(["3-5",
            "10-14",
            "16-20",
            "12-18",
            "",
            "1",
            "5",
            "8",
            "11",
            "17",
            "32"]);
        expect(cafeteria.FreshIngredientCount).toBe(3);
        expect(cafeteria.PossibleFreshIngredientCount).toBe(14);
    })

    test("Given two partially overlapping ranges, they should be combined", () => {
        const cafeteria = new Cafeteria(["1-5", "3-10"]);
        expect(cafeteria.PossibleFreshIngredientCount).toBe(10);
    });

    test("Given two partially overlapping ranges, they should be combined", () => {
        const cafeteria = new Cafeteria(["3-10", "1-5"]);
        expect(cafeteria.PossibleFreshIngredientCount).toBe(10);
    });

    test("Given a range the wholly overlaps some existing ranges, it should be handled appropriately", () => {
        const cafeteria = new Cafeteria(["3-5", "7-8", "1-10"]);
        expect(cafeteria.PossibleFreshIngredientCount).toBe(10);
    })
})