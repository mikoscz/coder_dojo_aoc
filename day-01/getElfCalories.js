export function getElfCalories(input) {
  const sums = input.split("\n\n").map((elf) => {
    return elf
      .split("\n")
      .filter(Boolean)
      .map((caloriesAsString) => parseInt(caloriesAsString))
      .reduce((sum, calories) => sum + calories, 0);
  });
  return sums;
}
