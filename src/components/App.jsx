import { useEffect, useState } from 'react';
import './App.css';
import { Description } from './Description';
import { Options } from './Options';
import { Feedback } from './Feedback';

export const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('saved-feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  useEffect(() => {
    localStorage.setItem('saved-feedback', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div>
      <Description />
      <Options setFeedback={setFeedback} feedback={feedback} totalFeedback={totalFeedback} />
      <Feedback feedback={feedback} totalFeedback={totalFeedback} />
    </div>
  );
};
