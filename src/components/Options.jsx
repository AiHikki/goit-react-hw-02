import styles from './Options.module.css';

export const Options = ({ setFeedback, totalFeedback }) => {
  const addFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={styles.options}>
      <button onClick={() => addFeedback('good')}>Good</button>
      <button onClick={() => addFeedback('neutral')}>Neutral</button>
      <button onClick={() => addFeedback('bad')}>Bad</button>
      {Boolean(totalFeedback) && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};
