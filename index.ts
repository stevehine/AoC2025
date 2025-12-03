import * as readline from "node:readline";
import * as fs from "node:fs";
import { SecretEntrance } from "./library/secretEntrance";
import { GiftShop } from "./library/giftShop";
import { Lobby } from "./library/lobby";

const input: string[] = [];

readline
  .createInterface({
    input: fs.createReadStream(`inputs/${process.argv[2]}`),
    terminal: false,
  })
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    switch (process.argv[2]) {
      case "day1":
        {
          const secretEntrance = new SecretEntrance(input);
          console.log(`Password: ${secretEntrance.Password}`);
          console.log(`Password Method 2: ${secretEntrance.PasswordMethod2}`);
        }
        break;
      case "day2":
        {
          const giftShop = new GiftShop(input[0]);
          console.log(`Sum of simple invalid IDs: ${giftShop.simpleInvalidProductIdTotal}`);
          console.log(`Sum of all invalid IDs: ${giftShop.allInvalidProductIdTotal}`);
        }
        break;
      case "day3":
        {
          const lobby = new Lobby(input);
          console.log(`Total Output Joltage for 2 batteries: ${lobby.getTotalJoltage(2)}`);
          console.log(`Total Output Joltage for 12 batteries: ${lobby.getTotalJoltage(12)}`);
        }
        break;
      default:
        console.log("You need to tell me which day to run");
    }
  });
