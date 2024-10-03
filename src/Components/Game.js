import React, { useState } from 'react';

function Game() {

  const [number, setNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');


  function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
  }


  function handleChange(e) {
    setGuess(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const guessedNumber = parseFloat(guess, 10);

    if (guessedNumber < number) {
      setMessage('you guessed lower');
    } else if (guessedNumber > number) {
      setMessage('you guessed higher');
    } else {
      setMessage('Congratulations!');
      setNumber(generateRandomNumber());
    }
  }

  return (
    <div>
      <h1>Guess The Number</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='number'  name='number'  placeholder='Enter your guess'  value={guess}  onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
      <p>{message}</p>
      
    </div>
  );
}

export default Game;

