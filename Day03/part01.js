const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => x.split(" "));

console.log(input);

let gamma_rate = "0";
let epsilon_rate = "0";

for (i = 0; i < input[0][0].length; i++) {
  let num_of_ones = 0;
  let num_of_zeroes = 0;

  for (let j = 0; j < input.length; j++) {
    if (parseInt(input[j][0][i]) == 1) {
      num_of_ones += 1;
    } else {
      num_of_zeroes += 1;
    }
  }

  if (num_of_ones > num_of_zeroes && i == 0) {
    gamma_rate = "1";
    epsilon_rate = "0";
  } else if (num_of_zeroes > num_of_ones && i == 0) {
    gamma_rate = "0";
    epsilon_rate = "1";
  } else if (num_of_ones > num_of_zeroes && i > 0) {
    gamma_rate = gamma_rate + "1";
    epsilon_rate = epsilon_rate + "0";
  } else if (num_of_zeroes > num_of_ones && i > 0) {
    gamma_rate = gamma_rate + "0";
    epsilon_rate = epsilon_rate + "1";
  }
}

let result = parseInt(gamma_rate, 2) * parseInt(epsilon_rate, 2);

console.log(result);
