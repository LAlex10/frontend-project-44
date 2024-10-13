import readlineSync from 'readline-sync';

const correctCount = 3;

export default (description, getQuestAndAnsw) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 0; i < correctCount; i += 1) {
    const [question, correctAnswer] = getQuestAndAnsw();
    console.log(`Question: ${question}`);
    let answer = readlineSync.question('Your answer: ');
    answer = answer.toLowerCase();
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
