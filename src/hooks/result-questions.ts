import { atom, useAtom } from 'jotai';

const resultQuestionsAtom = atom<boolean>(false);

export function useResultQuestions() {
  const [resultQuestion, setResultQuestion] = useAtom(resultQuestionsAtom);

  return {
    resultQuestion,
    setResultQuestion,
  };
}
