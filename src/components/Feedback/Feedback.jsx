export const Feedback = ({ feedback: { good, neutral, bad }, totalFeedback }) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive {Math.round(((good + neutral) / totalFeedback) * 100)}%</li>
    </ul>
  );
};
