import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const addName = (event) => {
    setNewName(event.target.value);
    //console.log(newName);
  };

  const handleSavePerson = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSavePerson}>
        <div>
          name: <input onChange={addName} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  );
};

export default App;
