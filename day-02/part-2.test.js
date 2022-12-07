import { expect, test } from 'vitest';
import { partTwo } from "./part-2";

const sampleData = `
A Y
B X
C Z
`;

test('day-2 part-1', () => {
  expect(partTwo(sampleData)).toBe(12);
});
