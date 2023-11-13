import { test } from "node:test";
import { expect } from "expect";
import { transpose } from "./array.js";

test("transpose", async () => {
  expect(
    transpose([
      [1, 2],
      [3, 4],
    ])
  ).toEqual([
    [1, 3],
    [2, 4],
  ]);
});
