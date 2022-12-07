import { readFileSync} from "node:fs";
import { getElfCalories } from "./getElfCalories.js";

const data = readFileSync("./day-01/input.txt", "utf-8");

export function partOne(input) {
  const sums = getElfCalories(input)

  return Math.max(...sums)
}

console.log(`day-1 part-1 result: ${partOne(data)}`);
