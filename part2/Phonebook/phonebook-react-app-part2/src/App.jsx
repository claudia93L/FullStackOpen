import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchName = (event) => {
    setSearchName(event.target.value);
  };

  const personsToShow =
    searchName.trim() === ''
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(searchName.toLowerCase())
        );

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

  //console.log(persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input type='text' value={searchName} onChange={handleSearchName} />
      </div>
      <br />
      <h2>Add new person</h2>
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
        {personsToShow.map((person) => {
          return (
            <li key={person.id}>
              {person.name}: {person.number}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
