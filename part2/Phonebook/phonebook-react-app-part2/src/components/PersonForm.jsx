import React from 'react';

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const checkEmptyInputs = () => {
    // controllo se i campi sono vuoti
    if (newName === '') {
      alert('Please enter a name before adding.');
      return true;
    } else if (newNumber === '') {
      alert('Please enter a number before adding.');
      return true;
    }

    return false;
  };

  const checkNameDuplicated = () => {
    // controllo se il nome che si sta cercando di salvare è duplicato
    const nameExists = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (nameExists) {
      alert(`${newName} is already present in the phonebook`);
      return true;
    }
    return false;
  };

  const checkNumberDuplicated = () => {
    const numberExists = persons.find((person) => person.number === newNumber);
    if (numberExists) {
      alert(`The number ${newNumber} is already present in the phonebook`);
      return true;
    }
    return false;
  };

  const addNewPerson = () => {
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    setPersons(persons.concat(newPerson));
    //console.log(persons);
    setNewName(''); // ripulisco lo stato dell'input nuovo nome
    setNewNumber('');
  };

  const handleAddPerson = (event) => {
    event.preventDefault();

    if (
      checkEmptyInputs() ||
      checkNameDuplicated() ||
      checkNumberDuplicated()
    ) {
      return;
    }

    addNewPerson();
  };

  return (
    <div>
      <h3>Add new person</h3>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input type='text' onChange={handleNewName} value={newName} />
        </div>
        <br />
        <div>
          number:
          <input type='text' onChange={handleNewNumber} value={newNumber} />
        </div>
        <br />
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <br />
    </div>
  );
};

export default PersonForm;
