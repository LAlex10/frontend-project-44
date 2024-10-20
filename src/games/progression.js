import game from '../index.js';
import randomInteger from '../genRandomNum.js';

const description = 'What number is missing in the progression?';

function generateProgression(length) {
  const start = randomInteger(1, 20);
  const step = randomInteger(1, 5);
  const hiddenIndex = Math.floor(Math.random() * length);

  const progression = [];
  const result = [];
  for (let i = 0; i < length; i += 1) {
    if (i === hiddenIndex) {
      progression.push(start + i * step);
      result.push('..');
    } else {
      progression.push(start + i * step);
      result.push(start + i * step);
    }
  }

  return {
    result, progression, start, step, hiddenIndex,
  };
}

function getQuestAndAnsw() {
  const { result, progression, hiddenIndex } = generateProgression(10);
  const correctAnswer = progression[hiddenIndex].toString();
  const question = result.join(' ');
  return [question, correctAnswer];
}

export default () => {
  game(description, getQuestAndAnsw);
};
