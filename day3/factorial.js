const factorial = (number) => {
  if (number > 0) {
    return number * factorial(number - 1);
  } else {
    return 1;
  }
};

const calculate = (m) => {
  let factorialArr = [];
  for (let i = 1; i <= m; i++) {
    factorialArr.push(factorial(i));
  }
};

calculate(4);
console.log(factorialArr);
