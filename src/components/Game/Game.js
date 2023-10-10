import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form/Form';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('in progress');

  const addResult = (result) => {
    if (guessResults.length > NUM_OF_GUESSES_ALLOWED) return;

    setGuessResults([...guessResults, result]);

    if (result === answer) {
      setGameStatus('won');
    } else if (guessResults.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus('lost');
    }
  };

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <Form addResult={addResult} gameStatus={gameStatus} />
      {gameStatus === 'won' && (
        <div className='happy banner'>
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guessResults.length} guesses</strong>.
          </p>
        </div>
      )}
      {gameStatus === 'lost' && (
        <div className='sad banner'>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
