import React from 'react';

const DisplayStatistics = ({ text, value }) => {
  return (
    <>
      <td>
        {text}: {value}
      </td>
    </>
  );
};

export default DisplayStatistics;
