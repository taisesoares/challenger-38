import { checkAnswer } from '../../helpers';
import styles from './CardOption.module.css';

interface ICardOptions {
  correctAnswer: string;
  chosenAnswer: string | undefined;
  imgSrc: string;
  text: string;
  handleSelectAnswer: () => void;
}

export function CardOption({
  imgSrc,
  correctAnswer,
  chosenAnswer,
  text,
  handleSelectAnswer,
}: ICardOptions) {
  const answerCorrectOrIncorrect = checkAnswer(correctAnswer, chosenAnswer);
  const answerSameAsSelected = chosenAnswer === text;

  const stylesCardAnswer =
    answerCorrectOrIncorrect && answerSameAsSelected
      ? `${styles.card} ${styles[answerCorrectOrIncorrect]}`
      : styles.card;

  const stylesCircleAnswer =
    answerCorrectOrIncorrect && answerSameAsSelected
      ? `${styles.circle} ${styles[answerCorrectOrIncorrect]}`
      : styles.circle;

  return (
    <div className={stylesCardAnswer}>
      <div className={styles.header}>
        <div className={stylesCircleAnswer} onClick={handleSelectAnswer} />
      </div>
      <div className={styles.content}>
        <img src={`./src/assets/${imgSrc}`} alt="" />
        <span>{text}</span>
      </div>
    </div>
  );
}
