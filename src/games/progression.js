import game from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const description = 'What number is missing in the progression?';

function getRandomValues() {
  return {
    start: generateRandomNumber(1, 20),
    step: generateRandomNumber(1, 5),
    hiddenIndex: generateRandomNumber(0, 9),
  };
}

function generateProgression({ start, step, hiddenIndex }) {
  const progression = [];
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    if (i === hiddenIndex) {
      progression.push(start + i * step);
      result.push('..');
    } else {
      progression.push(start + i * step);
      result.push(start + i * step);
    }
  }

  return {
    result, progression,
  };
}

function getQuestAndAnsw() {
  const { start, step, hiddenIndex } = getRandomValues();
  const { progression, result } = generateProgression({ start, step, hiddenIndex });
  const correctAnswer = progression[hiddenIndex].toString();
  const question = result.join(' ');
  return [question, correctAnswer];
}
export default () => {
  game(description, getQuestAndAnsw);
};
