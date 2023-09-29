import { atom, useAtom } from 'jotai';

type ChosenAnswer = {
  index: number;
  answer: string;
};

const chosenAnswerAtom = atom<ChosenAnswer | undefined>(undefined);
const scoreAtom = atom<number>(0);

export function useChosenAnswer() {
  const [chosenAnswer, setChosenAnswer] = useAtom(chosenAnswerAtom);
  const [score, setScore] = useAtom(scoreAtom);

  function handleSelectAnswer(
    answer: string,
    index: number,
    allCorrectAnswer: string
  ) {
    if (chosenAnswer) return;

    setChosenAnswer({
      answer,
      index,
    });

    if (allCorrectAnswer === answer) {
      setScore((prev) => prev + 1);
    }
  }

  return {
    chosenAnswer,
    handleSelectAnswer,
    setChosenAnswer,
    score,
  };
}
