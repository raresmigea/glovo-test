import './App.css';
import Container from './components/Container';
import React, { useState } from 'react';

function App() {
  const [reload, setReload] = useState(false);

  const addGlovo = () => {
    const glovoName = document.getElementById('iii').value;

    async function postData() {
      const url = 'https://crud-challenge.herokuapp.com/glovers';
      const response = await fetch(url, {
        method: 'POST',

        headers: {
          'interview-id': 'superman',
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({ name: glovoName }),
      });
      return response.json();
    }

    postData('https://crud-challenge.herokuapp.com/glovers', {
      answer: 42,
    }).then((data) => {
      // setReload(true);
      window.location.reload(false);
    });
  };
  return (
    <div className='App'>
      <div>
        <form>
          <label>
            <input
              id='iii'
              placeholder="input glover's name"
              type='text'
              name='name'
            />
          </label>
          <input type='button' value='ADD' onClick={() => addGlovo()} />
        </form>
      </div>{' '}
      <Container />
    </div>
  );
}

export default App;
