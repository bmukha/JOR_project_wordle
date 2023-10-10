import React from 'react';

import Guess from '../Guess/Guess';

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guessResults, answer }) {
  return (
    <div className='guess-results'>
      {range(0, NUM_OF_GUESSES_ALLOWED).map((result, index) => (
        <Guess
          key={crypto.randomUUID()}
          guessResult={guessResults[index]}
          answer={answer}>
          {result}
        </Guess>
      ))}
    </div>
  );
}

export default GuessResults;
