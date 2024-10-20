import game from '../index.js';
import randomInteger from '../genRandomNum.js';

const description = 'Find the greatest common divisor of given numbers.';

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    // eslint-disable-next-line no-param-reassign
    b = a % b;
    // eslint-disable-next-line no-param-reassign
    a = temp;
  }
  return a;
}

const getQuestAndAnsw = () => {
  const num1 = randomInteger(1, 99);
  const num2 = randomInteger(1, 99);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return [question, correctAnswer];
};
export default () => {
  game(description, getQuestAndAnsw);
};
