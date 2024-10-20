import game from '../index.js';
import randomInteger from '../genRandomNum.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
}

const getQuestAndAnsw = () => {
  const question = randomInteger(1, 50);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};
export default () => {
  game(description, getQuestAndAnsw);
};
