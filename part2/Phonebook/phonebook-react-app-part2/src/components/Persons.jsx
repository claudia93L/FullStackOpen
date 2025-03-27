import React from 'react';
import Person from './Person';

const Persons = ({ personsToShow }) => {
  return (
    <div>
      <h3>Numbers</h3>
      <ul>
        {personsToShow.map((person) => {
          return <Person key={person.id} person={person}></Person>;
        })}
      </ul>
    </div>
  );
};

export default Persons;
