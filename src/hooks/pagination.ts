import { atom, useAtom } from 'jotai';
import { useChosenAnswer } from '.';

const currentPageAtom = atom<number>(1);

export function usePagination() {
  const { setChosenAnswer } = useChosenAnswer();
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  function handleNextPage() {
    setCurrentPage((prev) => prev + 1);
    setChosenAnswer(undefined);
  }

  return {
    currentPage,
    setCurrentPage,
    handleNextPage,
  };
}
