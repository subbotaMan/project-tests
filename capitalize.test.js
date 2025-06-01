import { strict as assert } from "node:assert";
import capitalize from "./capitalize.js";

assert.equal(capitalize("hello"), "Hello");
assert.equal(capitalize(""), "");
assert.equal(capitalize(123), "Error: data type not string");

console.log("Тесты завершились успешно");
