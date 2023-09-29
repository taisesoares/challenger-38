import styles from './Footer.module.css';
import {
  useChosenAnswer,
  usePagination,
  useResultQuestions,
} from '../../hooks';

interface TotalPage {
  totalPage: number;
}

export function Footer({ totalPage }: TotalPage) {
  const { chosenAnswer } = useChosenAnswer();
  const { currentPage, handleNextPage } = usePagination();
  const { setResultQuestion } = useResultQuestions();
  const finallyPage = currentPage === totalPage;

  return (
    <div className={styles.footer}>
      <p>
        <span>{currentPage}</span>/{totalPage}
      </p>

      {!finallyPage ? (
        <button
          className={styles.feedbackButton}
          onClick={handleNextPage}
          disabled={!chosenAnswer?.answer}
        />
      ) : (
        <button
          className={styles.finallyButton}
          onClick={() => setResultQuestion((prev) => !prev)}
        >
          Finalizar
        </button>
      )}
    </div>
  );
}
