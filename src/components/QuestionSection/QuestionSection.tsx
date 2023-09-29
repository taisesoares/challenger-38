import { useChosenAnswer, usePagination } from '../../hooks';
import { CardOption } from '../CardOption/CardOption';

import styles from './QuestionSection.module.css';

interface Question {
  questions: {
    id: number;
    question: string;
    options: {
      id: string;
      image: string;
      text: string;
    }[];
    correctAnswer: string;
  }[];
}

export function QuestionSection({ questions }: Question) {
  const { chosenAnswer, handleSelectAnswer } = useChosenAnswer();
  const { currentPage } = usePagination();
  const currentAnswer = questions[currentPage - 1];
  const correctAnswer = currentAnswer.correctAnswer;

  return (
    <main>
      <div className={styles.contentTitle}>
        <h1>{currentAnswer.question}</h1>
      </div>
      <div className={styles.cardOptions}>
        {currentAnswer.options.map((option, index) => (
          <CardOption
            key={option.id}
            text={option.text}
            imgSrc={option.image}
            chosenAnswer={chosenAnswer?.answer}
            correctAnswer={currentAnswer.correctAnswer}
            handleSelectAnswer={() =>
              handleSelectAnswer(option.text, index, correctAnswer)
            }
          />
        ))}
      </div>
    </main>
  );
}
