import game from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const description = 'What number is missing in the progression?';

function generateProgression(num, length, step) {
  const progression = [num];
  for (let i = 0; i < length; i += 1) {
    progression.push(progression[i] + step);
  }
  return progression;
}

function getQuestAndAnsw() {
  const progressionLength = generateRandomNumber(9, 9);
  const stepNum = generateRandomNumber(1, 5);
  const hiddenIndex = generateRandomNumber(0, progressionLength);
  const startNum = generateRandomNumber();
  const progression = generateProgression(startNum, progressionLength, stepNum);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
}
export default () => {
  game(description, getQuestAndAnsw);
};
