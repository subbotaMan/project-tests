import capitalize from "../src/capitalize.js";

const errorMessage = "Тесты не прошли";

if (capitalize("hello") !== "Hello") {
  throw new Error(errorMessage);
}

if (capitalize("") !== "") {
  throw new Error(errorMessage);
}

console.log("Тесты завершились успешно");
