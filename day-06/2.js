"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
  let dayName = new Date(dateString).toString().split(" ")[0];
  // Write your code here
  if (dayName === "Sun") dayName = "Sunday";
  else if (dayName === "Mon") dayName = "Monday";
  else if (dayName === "Tue") dayName = "Tuesday";
  else if (dayName === "Wed") dayName = "Wednesday";
  else if (dayName === "Thu") dayName = "Thursday";
  else if (dayName === "Fri") dayName = "Friday";
  else dayName = "Saturday";

  return dayName;
}

function main() {
  const d = +readLine();

  for (let i = 0; i < d; i++) {
    const date = readLine();

    console.log(getDayName(date));
  }
}
