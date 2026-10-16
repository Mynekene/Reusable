'use strict';

const square = (x) => {
  return x * x;
};

const cube = (x) => {
  return x * x * x;
};

const average = (a, b) => {
  return (a + b) / 2;
};

const calculate = () => {
  const result = [];
  for (let i = 0; i <= 9; i++) {
    const s = square(i);
    const c = cube(i);
    result.push(average(s, c));
  }
  return result;
};

module.exports = { square, cube, average, calculate };
