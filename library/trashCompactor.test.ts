import { TrashCompactor } from "./trashCompactor"

describe("Some tests about trash compactors and Cephalopod maths", () => {
    test("Give the example worksheet calculate the total sum of problems as 4277556", () => {
        const trashCompactor = new TrashCompactor([
            "123 328  51 64 ",
            " 45 64  387 23 ",
            "  6 98  215 314",
            "*   +   *   +  "]);

        expect(trashCompactor.totalOfSums.toString()).toBe(BigInt("4277556").toString());
        expect(trashCompactor.totalOfSumsDoneCorrectly.toString()).toBe(BigInt("3263827").toString());
    })
})