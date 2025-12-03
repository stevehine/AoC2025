import { Lobby } from "./lobby";

describe("Some tests in the lobby", () => {
    test("Four example banks have a total joltage of 357", () => {
        const lobby = new Lobby(["987654321111111",
            "811111111111119",
            "234234234234278",
            "818181911112111"]);

        expect(lobby.getTotalJoltage(2)).toBe(357);
        expect(lobby.getTotalJoltage(12)).toBe(3121910778619);
    })
});