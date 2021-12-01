const fs = require("fs");

const array = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)
  .map((x) => parseInt(x));

// const array = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

let i = 0;
let num_of_increase = 0;

for (i; i < array.length; i++) {
  let sum1 = array[i] + array[i + 1] + array[i + 2];
  let sum2 = array[i + 1] + array[i + 2] + array[i + 3];

  if (sum1 < sum2) {
    num_of_increase += 1;
  }
}

console.log(num_of_increase);
