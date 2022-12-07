import { readFileSync } from "node:fs";
import { getElfCalories } from "./getElfCalories";

const data = readFileSync("./day-01/input.txt", "utf-8");

export function partTwo(input) {
  const sums = getElfCalories(input).sort((a, b) => b - a);

  //approach 1
  const result = sums[0] + sums[1] + sums[2];

  //approach 2
  // const result2 = sums.slice(0, 3).reduce((sum, calories) => sum + calories, 0);

  return result;
}

console.log(`day-1 part-2 result: ${partTwo(data)}`);
