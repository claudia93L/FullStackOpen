import React from 'react';

const DisplayStatistics = ({ text, value }) => {
  const checkDisplay = value !== 0 ? true : false;

  return (
    <div>
      {checkDisplay ? (
        <p>
          {text}: {value}
        </p>
      ) : (
        <p>No feedback given yet.</p>
      )}
    </div>
  );
};

export default DisplayStatistics;
