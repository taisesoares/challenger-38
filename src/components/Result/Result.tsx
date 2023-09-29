import { useChosenAnswer } from '../../hooks';

import WinnerImage from '../../assets/success-finally.svg';
import LostImage from '../../assets/it-lost.svg';

import styles from './Result.module.css';

interface TotalPage {
  totalPage: number;
}

export function ResultQuestions({ totalPage }: TotalPage) {
  const { score } = useChosenAnswer();
  const isWinner = score === totalPage - 1;
  const imageSrc = isWinner ? WinnerImage : LostImage;

  return (
    <div className={styles.container}>
      <img src={imageSrc} alt="" />
      {!isWinner && (
        <button onClick={() => location.reload()}>Tentar novamente</button>
      )}
    </div>
  );
}
