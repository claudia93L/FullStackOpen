import React from 'react';

const Total = (props) => {
  console.log(props);
  const total = props.parts.reduce((acc, part) => acc + part.exercises, 0);

  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};

export default Total;
