import { SecretEntrance } from "./secretEntrance";

describe("Some tests about secret entrances", () => {
    test("For the sample moves the password is 3", () => {
        const secretEntrance = new SecretEntrance([
            "L68",
            "L30",
            "R48",
            "L5",
            "R60",
            "L55",
            "L1",
            "L99",
            "R14",
            "L82"
        ]);
        expect(secretEntrance.Password).toBe(3);
        expect(secretEntrance.PasswordMethod2).toBe(6);
    });
    test("One R1000 rotation goes past 0 10 times", () => {
        const secretEntrance = new SecretEntrance(["R1000"]);
        expect(secretEntrance.PasswordMethod2).toBe(10);
    })
});
