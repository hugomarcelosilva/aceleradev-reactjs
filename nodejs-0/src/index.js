"use strict";

let fibo = {
  sqa: [],
};

const fibonacci = () => {
  let a = 0,
    b = 1,
    i = 0,
    num = 350,
    temp;
  while (b <= num) {
    temp = a;
    a = a + b;
    b = temp;
    fibo.sqa[i] = b;
    i++;
  }
  return fibo.sqa;
};

const isFibonnaci = (num) => {
  return fibo.sqa.some((element) => element === num);
};

module.exports = {
  fibonacci,
  isFibonnaci,
};
