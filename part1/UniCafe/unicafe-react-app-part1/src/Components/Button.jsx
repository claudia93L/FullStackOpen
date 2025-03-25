import React from 'react';

const Button = ({ onClick, btnName }) => {
  return (
    <div>
      <button onClick={onClick}>{btnName}</button>
    </div>
  );
};

export default Button;
