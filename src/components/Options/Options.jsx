import styles from './Options.module.css';

export const Options = ({
  resetFeedback,
  totalFeedback,
  addGoodFeedback,
  addBadFeedback,
  addNeutralFeedback,
}) => {
  return (
    <div className={styles.options}>
      <button onClick={addGoodFeedback}>Good</button>
      <button onClick={addNeutralFeedback}>Neutral</button>
      <button onClick={addBadFeedback}>Bad</button>
      {Boolean(totalFeedback) && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};
