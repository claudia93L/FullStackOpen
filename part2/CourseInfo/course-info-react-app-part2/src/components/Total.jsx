import React from 'react';

const Total = ({ course }) => {
  const total = course.parts.reduce((acc, part) => acc + part.exercises, 0);

  return (
    <div>
      <p>
        <strong>Total number of exercises: {total}</strong>
      </p>
    </div>
  );
};

export default Total;
