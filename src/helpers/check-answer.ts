export function checkAnswer(
  correctAnswer: string,
  chosenAnswer: string | undefined
): 'correct' | 'incorrect' | undefined {
  if (!chosenAnswer) return;
  return correctAnswer === chosenAnswer ? 'correct' : 'incorrect';
}
