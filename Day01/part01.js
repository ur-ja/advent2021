const fs = require("fs");

const array = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)
  .map((x) => parseInt(x));

let i = 0;
let num_of_increase = 0;

for (i; i < array.length; i++) {
  if (array[i] < array[i + 1]) {
    num_of_increase += 1;
  }
}

console.log(num_of_increase);
