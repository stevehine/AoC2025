import { Playground } from "./playground"

describe("Some tests about playground and lighting", () => {
    test("Given the sample set the product of the three largest circuits is 40", () => {
        const playground = new Playground(["162,817,812",
            "57,618,57",
            "906,360,560",
            "592,479,940",
            "352,342,300",
            "466,668,158",
            "542,29,236",
            "431,825,988",
            "739,650,466",
            "52,470,668",
            "216,146,977",
            "819,987,18",
            "117,168,530",
            "805,96,715",
            "346,949,466",
            "970,615,88",
            "941,993,340",
            "862,61,35",
            "984,92,344",
            "425,690,689"]);
        playground.CreateConnections(10);
        expect(playground.LargestCircuitsProduct).toBe(40);
        expect(playground.CreateConnections(undefined)).toBe(25272);
    })
})