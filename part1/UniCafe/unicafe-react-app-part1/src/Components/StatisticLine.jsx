import React from 'react';

const DisplayStatistics = ({
  good,
  neutral,
  bad,
  totalFeedbacks,
  averageScore,
  positiveFeedbackPercentage,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {totalFeedbacks}</p>
      <p>Average: {averageScore}</p>
      <p>Positive: {positiveFeedbackPercentage}</p>
    </div>
  );
};

export default DisplayStatistics;
