import { expect, test } from 'vitest';
import { partOne } from "./part-1";

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

test('day-1 part-1', () => {
  expect(partOne(sampleData)).toBe(24000);
});
