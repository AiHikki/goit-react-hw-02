import styles from './Options.module.css';

export const Options = ({ resetFeedback, totalFeedback, addFeedback, feedback }) => {
  return (
    <div className={styles.options}>
      {Object.keys(feedback).map(el => (
        <button onClick={() => addFeedback(el)} key={el}>
          {el}
        </button>
      ))}
      {Boolean(totalFeedback) && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};
