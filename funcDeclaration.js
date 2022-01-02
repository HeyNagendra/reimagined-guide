function calcAdd(firstOperand, secondOperand) {
  return `The result of adding ${firstOperand} and ${secondOperand} is ${
    firstOperand + secondOperand
  }`;
}

const addNumbers = calcAdd(5, 2);
console.log(addNumbers);

const subNumbers = function (firstNumber, secondNumber) {
  return `The result of subtracting ${firstNumber} and ${secondNumber} is ${
    firstNumber - secondNumber
  }`;
};
console.log(subNumbers(7, 2));

// Arrow Function

const mulNumbers = (num1, num2) =>
  `The result of multiplying ${num1} and ${num2} is ${num1 * num2}`;
console.log(mulNumbers(4, 5));
