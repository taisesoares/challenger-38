import { Check } from 'phosphor-react';

import styles from './Header.module.css';
import { useChosenAnswer } from '../../hooks';

export function Header() {
  const { score } = useChosenAnswer();
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        👋 <strong>Quiz</strong>Time
      </h1>
      <button>
        <Check size={24} />
        {score}
      </button>
    </header>
  );
}
