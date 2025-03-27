import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleAddPerson = (event) => {
    event.preventDefault();

    // controllo se il campo è vuoto
    if (newName === '') {
      alert('Please enter a name before adding.');
      return;
    }

    // controllo se iil nome che si sta cercando di salvare è duplicato
    const nameExists = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (nameExists) {
      alert(`${newName} is already added to the phonebook`);
      return;
    } else {
      const newPerson = {
        name: newName,
      };

      setPersons(persons.concat(newPerson));
      //console.log(persons);
      setNewName(''); // ripulisco lo stato dell'input nuovo nome
    }
  };

  //console.log(persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input onChange={handleNewName} value={newName} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => {
          return <li key={person.name}>{person.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
