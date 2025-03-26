import React from 'react';

const Button = ({ onClick, btnName }) => {
  return (
    <>
      <button onClick={onClick}>{btnName}</button>
    </>
  );
};

export default Button;
