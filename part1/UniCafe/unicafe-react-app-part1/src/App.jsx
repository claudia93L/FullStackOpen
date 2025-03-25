import { useState } from 'react';
import Title from './Components/Title';
import Button from './Components/Button';
import StatisticLine from './Components/StatisticLine';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  //const [totalFeedbacks, setTotalFeedbacks] = useState(0);
  //const [averageScore, setAverageScore] = useState(0);
  //const [positiveFeedbackPercentage, setPositiveFeedbackPercentage] = useState(0);
  const totalFeedbacks = good + neutral + bad;
  const averageScore = 0;
  const positiveFeedbackPercentage = 0;

  const handleGoodClick = () => {
    setGood(good + 1);
    const updatedGood = good + 1;
    setTotalFeedbacks(updatedGood + bad + neutral);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    //const updatedNeutral = neutral + 1;
    //setTotalFeedbacks(updatedNeutral + good + bad);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    //const updatedBad = bad + 1;
    //setTotalFeedbacks(updatedBad + good + neutral);
  };

  return (
    <>
      <Title title='Give Feedbacks'></Title>
      <Button onClick={handleGoodClick} btnName='Good'></Button>
      <Button onClick={handleNeutralClick} btnName='Neutral'></Button>
      <Button onClick={handleBadClick} btnName='Bad'></Button>
      <Title title='Statistics'></Title>
      <StatisticLine
        good={good}
        neutral={neutral}
        bad={bad}
        totalFeedbacks={totalFeedbacks}
        averageScore={averageScore}
        positiveFeedbackPercentage={positiveFeedbackPercentage}
      ></StatisticLine>
    </>
  );
};

export default App;
