import { expect, test } from 'vitest';
import { partOne, moveResult, Paper, Lose, Rock } from "./part-1";

const sampleData = `
A Y
B X
C Z
`;

test('day-2 part-1', () => {
  expect(partOne(sampleData)).toBe(15);
});

test('day-2 part-1 moveResult', () => {
  expect(moveResult(Rock, Paper)).toBe(Lose);
});
