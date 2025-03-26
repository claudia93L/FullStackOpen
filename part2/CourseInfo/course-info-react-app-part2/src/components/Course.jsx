import React from 'react';
import Part from './Part';

const Course = ({ course }) => {
  return (
    <div>
      {course.parts.map((el) => {
        return (
          <Part key={el.id} name={el.name} exercises={el.exercises}></Part>
        );
      })}
    </div>
  );
};

export default Course;
