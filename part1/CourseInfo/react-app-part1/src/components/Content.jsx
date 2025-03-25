import React from 'react';
import Part from './Part';

const Content = (props) => {
  console.log(props);
  return (
    <div>
      {props.parts.map((el, index) => {
        return (
          <Part key={index} name={el.name} exercises={el.exercises}></Part>
        );
      })}
    </div>
  );
};

export default Content;
