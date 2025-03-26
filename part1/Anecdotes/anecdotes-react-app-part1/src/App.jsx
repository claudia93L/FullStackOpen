import { useState } from 'react';
import Button from './components/Button';

const App = () => {
  const anecdotes = [
    { anecdote: 'If it hurts, do it more often.', votes: [] },
    {
      anecdote: 'Adding manpower to a late software project makes it later!',
      votes: [],
    },
    {
      anecdote:
        'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: [],
    },
    {
      anecdote:
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: [],
    },
    { anecdote: 'Premature optimization is the root of all evil.', votes: [] },
    {
      anecdote:
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: [],
    },
    {
      anecdote:
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      votes: [],
    },
    { anecdote: 'The only way to go fast, is to go well.', votes: [] },
  ];

  const [selected, setSelected] = useState(0);

  const handleAnecdoteChange = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVotes = () => (
  );

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>No votes yet.</p>
      <div>
        <Button onClick={handleAnecdoteChange} btnName='Next anecdote'></Button>
        <Button onClick={handleVotes} btnName='Place vote'></Button>
      </div>
    </div>
  );
};

export default App;
