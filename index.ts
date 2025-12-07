import * as readline from "node:readline";
import * as fs from "node:fs";
import { SecretEntrance } from "./library/secretEntrance";
import { GiftShop } from "./library/giftShop";
import { Lobby } from "./library/lobby";
import { PrintDept } from "./library/printDept";
import { Cafeteria } from "./library/cafeteria";
import { TrashCompactor } from "./library/trashCompactor";
import { Laboratory } from "./library/laboratory";

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
      case "day4":
        {
          const printDept = new PrintDept(input);
          console.log(`Reachable rolls is: ${printDept.ReachableRolls}`);
          console.log(`Total Removable rolls is: ${printDept.TotalRemovableRolls}`);
        }
        break;
      case "day5": {
        const cafeteria = new Cafeteria(input);
        console.log(`Fresh Ingredient Count: ${cafeteria.FreshIngredientCount}`);
        console.log(`Possible Fresh Ingredient Count: ${cafeteria.PossibleFreshIngredientCount}`);
      }
        break;
      case "day6": {
        const trashCompactor = new TrashCompactor(input);
        console.log(`Result of maths: ${trashCompactor.totalOfSums}`);
        console.log(`Result of proper maths: ${trashCompactor.totalOfSumsDoneCorrectly}`);
      }
        break;
      case "day7": {
        const laboratory = new Laboratory(input);
        console.log(`The beam was split: ${laboratory.BeamSplitCount} times`);
        console.log(`There were: ${laboratory.PossibleTimeLines} possible timelines`);
      }
        break;
      default:
        console.log("You need to tell me which day to run");
    }
  });
