import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '32165466846' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

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

  //console.log(persons);

  return (
    <div>
      <h2>Phonebook</h2>
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
      <hr />
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => {
          return (
            <li key={person.name}>
              {person.name}: {person.number}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
