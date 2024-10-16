import game from '../index.js';

const description = 'What is the result of the expression?';

function getRandomOperator() {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
}

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
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
      return ('Unexpected operator');
  }
}

const getQuestAndAnsw = () => {
  const num1 = randomInteger(1, 99);
  const num2 = randomInteger(1, 99);
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, operator, num2).toString();

  return [question, correctAnswer];
};
export default () => {
  game(description, getQuestAndAnsw);
};
