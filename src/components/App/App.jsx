import { useEffect, useState } from 'react';
import './App.css';
import { Description } from '../Description/Description';
import { Options } from '../Options/Options';
import { Feedback } from '../Feedback/Feedback';
import { Notification } from '../Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState(
    () => JSON.parse(localStorage.getItem('saved-feedback')) ?? { good: 0, neutral: 0, bad: 0 }
  );
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  useEffect(() => {
    localStorage.setItem('saved-feedback', JSON.stringify(feedback));
  }, [feedback]);

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
    <div>
      <Description />
      <Options
        feedback={feedback}
        addFeedback={addFeedback}
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
