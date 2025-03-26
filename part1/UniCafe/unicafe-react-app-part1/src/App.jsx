import { useState } from 'react';
import Title from './Components/Title';
import Button from './Components/Button';
import StatisticLine from './Components/StatisticLine';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedbacks = good + neutral + bad;
  const averageScore =
    totalFeedbacks === 0
      ? 0
      : (good * 1 + neutral * 0 + bad * -1) / totalFeedbacks;
  const positiveFeedbackPercentage =
    totalFeedbacks === 0 ? 0 : (good / totalFeedbacks) * 100;

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <Title title='Give Feedbacks'></Title>
      <Button onClick={handleGoodClick} btnName='Good'></Button>
      <Button onClick={handleNeutralClick} btnName='Neutral'></Button>
      <Button onClick={handleBadClick} btnName='Bad'></Button>
      <Title title='Statistics'></Title>
      {totalFeedbacks > 0 ? (
        <>
          <Title title='Statistics' />
          <StatisticLine text='Good' value={good} />
          <StatisticLine text='Neutral' value={neutral} />
          <StatisticLine text='Bad' value={bad} />
          <StatisticLine text='Total Feedbacks' value={totalFeedbacks} />
          <StatisticLine text='Average Score' value={averageScore.toFixed(2)} />
          <StatisticLine
            text='Positive Feedback Percentage'
            value={`${positiveFeedbackPercentage.toFixed(2)}%`}
          />
        </>
      ) : (
        <p>No feedback given yet.</p>
      )}
    </>
  );
};

export default App;
