import { GiftShop } from "./giftShop"

describe("Some tests about gift shops", () => {
    test("Given the example product IDs the total of invalid ids should be as provided", () => {
        const giftShop = new GiftShop("11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124");
        expect(giftShop.simpleInvalidProductIdTotal).toBe(1227775554);
        expect(giftShop.allInvalidProductIdTotal).toBe(4174379265);
    })
})