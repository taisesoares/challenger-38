import { Header } from './components/Header/Header';
import { QuestionSection } from './components/QuestionSection/QuestionSection';
import { Footer } from './components/Footer/Footer';

import { ResultQuestions } from './components/Result/Result';

import styles from './App.module.css';

import './global.css';
import { useQuestions, useResultQuestions } from './hooks';

function App() {
  const { questions } = useQuestions();
  const { resultQuestion } = useResultQuestions();
  const totalPage = questions.length;

  return (
    <div className={styles.container}>
      <Header />
      {!resultQuestion && (
        <>
          <QuestionSection questions={questions} />
          <Footer totalPage={totalPage} />
        </>
      )}
      {resultQuestion && <ResultQuestions totalPage={totalPage} />}
    </div>
  );
}

export default App;
