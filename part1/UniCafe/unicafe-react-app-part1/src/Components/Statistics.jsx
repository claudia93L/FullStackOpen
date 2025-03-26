import React from 'react';
import StatisticLine from './StatisticLine';

const Statistics = ({ totalFeedbacks, good, neutral, bad }) => {
  const averageScore =
    totalFeedbacks === 0
      ? 0
      : (good * 1 + neutral * 0 + bad * -1) / totalFeedbacks;
  const positiveFeedbackPercentage =
    totalFeedbacks === 0 ? 0 : (good / totalFeedbacks) * 100;
  return (
    <div>
      
      <StatisticLine text='Good' value={good} />
      <StatisticLine text='Neutral' value={neutral} />
      <StatisticLine text='Bad' value={bad} />
      <StatisticLine text='Total Feedbacks' value={totalFeedbacks} />
      <StatisticLine text='Average Score' value={averageScore.toFixed(2)} />
      <StatisticLine
        text='Positive Feedback Percentage'
        value={`${positiveFeedbackPercentage.toFixed(2)}%`}
      />
    </div>
  );
};

export default Statistics;
