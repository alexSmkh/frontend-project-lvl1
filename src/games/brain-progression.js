import pairs from '@hexlet/pairs';
import { makeProgression, getRandomNumber } from '../math-lib.js';

export const getBrainProgressionRules = () => 'What number is missing in the progression?';

const makeQuestion = (progression, position, quest = '', length = 10) => {
  if (length === 0) return quest;
  if (length === position) return makeQuestion(pairs.car(progression), position, `.. ${quest}`, length - 1);
  return makeQuestion(pairs.car(progression), position, `${pairs.cdr(progression)} ${quest}`, length - 1);
};

const getAnswer = (progression, position, length = 10) => {
  if (length === position) return pairs.cdr(progression);
  return getAnswer(pairs.car(progression), position, length - 1);
};

export const getBrainProgressionChallenge = () => {
  const randomPosition = getRandomNumber(1, 10);
  const stepOfProgression = getRandomNumber(1, 10);
  const firstElementOfProgression = getRandomNumber();
  const progression = makeProgression(firstElementOfProgression, stepOfProgression);
  const question = makeQuestion(progression, randomPosition);
  const answer = getAnswer(progression, randomPosition);
  return pairs.cons(question, answer);
};
