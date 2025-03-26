import React from 'react';

const DisplayStatistics = ({ text, value }) => {
  return (
    <div>
        <p>
          {text}: {value}
        </p>
    </div>
  );
};

export default DisplayStatistics;
