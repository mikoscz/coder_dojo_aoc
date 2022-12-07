import { assert, expect, test } from 'vitest';
import { partTwo } from "./part-2";

const sampleData = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;

test('day-1 part-2', () => {
  expect(partTwo(sampleData)).toBe(45000);
});
