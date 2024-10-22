import game from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const description = 'What is the result of the expression?';

function getRandomOperator() {
  const operators = ['+', '-', '*'];
  return operators[generateRandomNumber(0, 2)];
}

function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unexpected operator');
  }
}

const getQuestAndAnsw = () => {
  const num1 = generateRandomNumber(1, 99);
  const num2 = generateRandomNumber(1, 99);
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, operator, num2).toString();

  return [question, correctAnswer];
};
export default () => {
  game(description, getQuestAndAnsw);
};
