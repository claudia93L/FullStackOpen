import { useState } from 'react';
import Button from './components/Button';
import Title from './components/Title';

const App = () => {
  const initialAnecdotes = [
    { anecdote: 'If it hurts, do it more often.', votes: 0 },
    {
      anecdote: 'Adding manpower to a late software project makes it later!',
      votes: 0,
    },
    {
      anecdote:
        'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0,
    },
    {
      anecdote:
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0,
    },
    { anecdote: 'Premature optimization is the root of all evil.', votes: 0 },
    {
      anecdote:
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0,
    },
    {
      anecdote:
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      votes: 0,
    },
    { anecdote: 'The only way to go fast, is to go well.', votes: 0 },
  ];

  const [selected, setSelected] = useState(0);
  const [anecdotes, setAnecdotes] = useState(initialAnecdotes);

  const handleAnecdoteChange = () => {
    // setto selected con un numero randoms
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVotes = () => {
    // copio l'oggetto
    const updatedAnecdotes = [...anecdotes];
    // aumento il numero di voti per l'anecdote selezionato
    updatedAnecdotes[selected].votes += 1;
    // aggiorno lo stato con i nuovi dati
    setAnecdotes(updatedAnecdotes);
  };

  // trovo l'aneddoto con il numero più grande di voti ciclando sull'oggetto
  const maxVotes = Math.max(...anecdotes.map((anecdote) => anecdote.votes));

  // valorizzo la variabile con gli aneddoti trovati in base all'uguaglianza rispetto al numero maggiore di voti
  const mostVotedAnecdotes = anecdotes.filter(
    (anecdote) => anecdote.votes === maxVotes
  );

  return (
    <>
      <div>
        <Title title='Anecdote of the day'></Title>
        <p>{anecdotes[selected].anecdote}</p>
        {anecdotes[selected].votes === 0 ? (
          <p>No votes yet.</p>
        ) : (
          <p>{anecdotes[selected].votes} votes received</p>
        )}

        <div>
          <Button
            onClick={handleAnecdoteChange}
            btnName='Next anecdote'
          ></Button>
          <Button onClick={handleVotes} btnName='Place vote'></Button>
        </div>
      </div>
      <div>
        <Title title='Anecdote with most votes'></Title>
        /* se il voto massimo è maggiore di zero, allora ciclo sull'oggetto
        degli aneddoti che vengono filtrati per numero massimo di voti */
        {maxVotes > 0 ? (
          mostVotedAnecdotes.map((el, index) => (
            <div key={index}>
              <p>{el.anecdote}</p>
              <p>This anecdote has {el.votes} votes</p>
              <hr />
            </div>
          ))
        ) : (
          <p>No votes yet.</p>
        )}
      </div>
    </>
  );
};

export default App;
