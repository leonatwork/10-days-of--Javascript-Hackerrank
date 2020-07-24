let operand1 = "";
let operand2 = "";
let operator = "";

let isOp1 = true;

const res = document.getElementById("res");
const zero = document.getElementById("btn0");
const one = document.getElementById("btn1");
const eql = document.getElementById("btnEql");
const clr = document.getElementById("btnClr");

zero.onclick = function () {
  if (isOp1) {
    operand1 += "0";
  } else {
    operand2 += "0";
  }
  res.innerHTML = operand1 + operator + operand2;
};

one.onclick = function () {
  if (isOp1) {
    operand1 += "1";
  } else {
    operand2 += "1";
  }
  res.innerHTML = operand1 + operator + operand2;
};

clr.onclick = function () {
  res.innerHTML = operand1 = operand2 = operator = "";
  isOp1 = true;
};

function binToDec(bin) {
  let dec = 0;
  for (let i = bin.length - 1; i >= 0; i--) {
    if (bin[i] === "1") {
      dec += 2 ** (bin.length - 1 - i);
    }
  }
  return dec;
}

function decToBin(dec) {
  let bin = "";
  console.log(dec);
  while (dec > 0) {
    if (dec % 2 === 0) {
      bin += "0";
    } else {
      bin += "1";
    }
    dec = Math.floor(dec / 2);
    console.log(dec);
  }
  console.log("bin", bin);
  const ans = bin.split("").reverse().join("");
  return ans;
}

eql.onclick = function () {
  let n1 = binToDec(operand1);
  let n2 = binToDec(operand2);
  console.log(n1, n2);
  let ans;
  switch (operator) {
    case "+":
      ans = n1 + n2;
      break;
    case "-":
      ans = n1 - n2;
      break;
    case "*":
      ans = n1 * n2;
      break;
    case "/":
      ans = Math.floor(n1 / n2);
  }
  console.log(ans);
  let finalAns = decToBin(ans);
  res.innerHTML = finalAns;
};

const btnSum = document.getElementById("btnSum");
const btnSub = document.getElementById("btnSub");
const btnMul = document.getElementById("btnMul");
const btnDiv = document.getElementById("btnDiv");

btnSum.onclick = function () {
  operator = "+";
  isOp1 = false;
  res.innerHTML = operand1 + operator + operand2;
};
btnSub.onclick = function () {
  operator = "-";
  isOp1 = false;
  res.innerHTML = operand1 + operator + operand2;
};
btnMul.onclick = function () {
  operator = "*";
  isOp1 = false;
  res.innerHTML = operand1 + operator + operand2;
};
btnDiv.onclick = function () {
  operator = "/";
  isOp1 = false;
  res.innerHTML = operand1 + operator + operand2;
};
