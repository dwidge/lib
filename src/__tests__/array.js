import { transpose } from "../array.js";

it("transpose", async () => {
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
