import game from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestAndAnsw = () => {
  const question = generateRandomNumber(1, 99);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};
export default () => {
  game(description, getQuestAndAnsw);
};
