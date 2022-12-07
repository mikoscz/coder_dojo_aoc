import { readFileSync} from "node:fs";

const data = readFileSync("./day-01/input.txt", "utf-8");

export function partOne(input) {
  const sums = input
    .split("\n\n")
    .map(elf => {
      return elf
        .split("\n")
        .filter(Boolean)
        .map(caloriesAsString => parseInt(caloriesAsString))
        .reduce((sum, calories) => sum + calories, 0)
    })

  return Math.max(...sums)
}

console.log(`day-1 part-1 result: ${partOne(data)}`);
