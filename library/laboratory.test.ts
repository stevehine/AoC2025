import { Laboratory } from "./laboratory"

describe("Some tests about laboratories", () => {
    test("An example Tachyon manifold splits the beam 21 times", () => {
        const laboratory = new Laboratory([
            ".......S.......",
            "...............",
            ".......^.......",
            "...............",
            "......^.^......",
            "...............",
            ".....^.^.^.....",
            "...............",
            "....^.^...^....",
            "...............",
            "...^.^...^.^...",
            "...............",
            "..^...^.....^..",
            "...............",
            ".^.^.^.^.^...^.",
            "..............."]);
        expect(laboratory.BeamSplitCount).toBe(21);
        expect(laboratory.PossibleTimeLines).toBe(40);
    })
})