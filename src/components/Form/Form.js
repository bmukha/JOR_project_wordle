import React from 'react';

function Form({ addResult, gameStatus }) {
  const [text, setText] = React.useState('');

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(event) => {
        event.preventDefault();
        addResult(text);
        setText('');
      }}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={text}
        onChange={({ target: { value } }) => {
          if (value.length > 5) return;
          setText(value.toUpperCase());
        }}
        pattern='[a-zA-Z]{5}'
        title='Please enter a 5-letter word.'
        disabled={gameStatus !== 'in progress'}
      />
    </form>
  );
}

export default Form;
