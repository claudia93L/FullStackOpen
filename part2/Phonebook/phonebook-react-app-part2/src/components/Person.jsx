import React from 'react';

const Person = ({ person }) => {
  return (
    <>
      <li>
        {person.name}: {person.number}
      </li>
      <hr />
    </>
  );
};

export default Person;
