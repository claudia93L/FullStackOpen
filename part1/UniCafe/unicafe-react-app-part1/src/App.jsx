import { useState } from 'react';
import Title from './Components/Title';
import Button from './Components/Button';
import Statistics from './Components/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedbacks = good + neutral + bad;

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
        <Statistics
          title='Statistics'
          totalFeedbacks={totalFeedbacks}
          good={good}
          neutral={neutral}
          bad={bad}
        ></Statistics>
      ) : (
        <p>No feedback given yet.</p>
      )}
    </>
  );
};

export default App;
