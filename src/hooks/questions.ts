import { useChosenAnswer } from '.';
import { questions } from '../data';

export function useQuestions() {
  const { score } = useChosenAnswer();

  function getResultQuestions() {
    if (score === questions.length) {
      return true;
    }

    return false;
  }

  return {
    questions,
    getResultQuestions,
  };
}
