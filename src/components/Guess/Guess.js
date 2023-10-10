import React from 'react';

import { range } from '../../utils';

import { checkGuess } from '../../game-helpers';

function Guess({ guessResult, answer }) {
  const checkedGuess = checkGuess(guessResult, answer);
  return (
    <p className='guess'>
      {range(0, 5).map((_, index) => {
        return (
          <span
            className={`cell${
              checkedGuess ? ' ' + checkedGuess[index].status : ''
            }`}
            key={crypto.randomUUID()}>
            {checkedGuess ? checkedGuess[index].letter : ''}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
