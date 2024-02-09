import { useEffect, useState } from 'react';
import './App.css';
import { Description } from '../Description/Description';
import { Options } from '../Options/Options';
import { Feedback } from '../Feedback/Feedback';
import { Notification } from '../Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('saved-feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  useEffect(() => {
    localStorage.setItem('saved-feedback', JSON.stringify(feedback));
  }, [feedback]);

  const addGoodFeedback = () => {
    setFeedback({ ...feedback, good: feedback.good + 1 });
  };
  const addNeutralFeedback = () => {
    setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
  };
  const addBadFeedback = () => {
    setFeedback({ ...feedback, bad: feedback.bad + 1 });
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div>
      <Description />
      <Options
        addGoodFeedback={addGoodFeedback}
        addNeutralFeedback={addNeutralFeedback}
        addBadFeedback={addBadFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      ) : (
        <Notification>No feedback yet</Notification>
      )}
    </div>
  );
};
