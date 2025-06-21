import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { expect, test } from "@jest/globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import reverse from "../src/index.js";

// Путь к фикстуре
const getFixturePath = (filename) =>
  path.join(__dirname, "..", "__fixtures__", filename);

// Чтение фикстуры
const readFixtureFile = (filename) =>
  fs.readFileSync(getFixturePath(filename), "utf-8");

test("reverse", () => {
  expect(reverse("hello")).toEqual("olleh");
  expect(reverse("")).toEqual("");
});

test("reverse", () => {
  const text = readFixtureFile("data.txt").trim();
  const result = readFixtureFile("result.txt").trim();

  expect(reverse(text)).toEqual(result);
});
