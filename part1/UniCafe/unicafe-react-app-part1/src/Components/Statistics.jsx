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
    <>
      <table>
        <tbody>
          <tr>
            <StatisticLine text='Good' value={good}></StatisticLine>
          </tr>
          <tr>
            <StatisticLine text='Neutral' value={neutral}></StatisticLine>
          </tr>
          <tr>
            <StatisticLine text='Bad' value={bad}></StatisticLine>
          </tr>
          <tr>
            <StatisticLine
              text='Total Feedbacks'
              value={totalFeedbacks}
            ></StatisticLine>
          </tr>
          <tr>
            <StatisticLine
              text='Average Score'
              value={averageScore}
            ></StatisticLine>
          </tr>
          <tr>
            <StatisticLine
              text='Positive Feedback Percentage'
              value={`${positiveFeedbackPercentage}%`}
            ></StatisticLine>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Statistics;
