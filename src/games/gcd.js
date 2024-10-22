import game from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

function gcd(a, b) {
  if (b === 0) return a;
  const temp = b;
  return gcd(temp, a % temp);
}

const getQuestAndAnsw = () => {
  const num1 = generateRandomNumber(1, 99);
  const num2 = generateRandomNumber(1, 99);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return [question, correctAnswer];
};
export default () => {
  game(description, getQuestAndAnsw);
};
