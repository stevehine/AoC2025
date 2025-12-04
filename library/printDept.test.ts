import { PrintDept } from "./printDept"

describe("Some tests about the printing department", () => {
    test("The example layout has 13 accessible rolls of paper", () => {
        const printDept = new PrintDept(["..@@.@@@@.",
            "@@@.@.@.@@",
            "@@@@@.@.@@",
            "@.@@@@..@.",
            "@@.@@@@.@@",
            ".@@@@@@@.@",
            ".@.@.@.@@@",
            "@.@@@.@@@@",
            ".@@@@@@@@.",
            "@.@.@@@.@."]);

        expect(printDept.ReachableRolls).toBe(13);
        expect(printDept.TotalRemovableRolls).toBe(43);
    })
})