import React from 'react';

const Total = ({ course }) => {
  console.log(course);
  const total = course.parts.reduce((acc, part) => acc + part.exercises, 0);

  return (
    <div>
      <p>Total number of exercises {total}</p>
    </div>
  );
};

export default Total;
