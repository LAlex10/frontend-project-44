import game from '../index.js';
import randomInteger from '../genRandomNum.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestAndAnsw = () => {
  const question = randomInteger(1, 99);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};
export default () => {
  game(description, getQuestAndAnsw);
};
