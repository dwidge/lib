import { test } from "node:test";
import { expect } from "expect";
import { dateYYMMDDfromSeconds, dateSecondsFromYYMMDD } from "./date.js";

test("dateYYMMDDfromSeconds", async () => {
  const s = dateSecondsFromYYMMDD("2022-10-05");
  expect("2022-10-05").toEqual(dateYYMMDDfromSeconds(s));
  const str = dateYYMMDDfromSeconds(79200);
  expect(79200).toEqual(dateSecondsFromYYMMDD(str));
});
