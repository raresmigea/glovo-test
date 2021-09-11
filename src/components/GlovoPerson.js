import React from 'react';

const GlovoPerson = ({ person }) => {
  //   const [reload, setReload] = useState(false);
  const deleteGlovo = (id) => {
    async function postData() {
      const url = `https://crud-challenge.herokuapp.com/glovers/${id}`;
      const response = await fetch(url, {
        method: 'DELETE',

        headers: {
          'interview-id': 'superman',
          'Content-Type': 'application/json',
        },
      });
      return response.json();
    }

    postData('https://crud-challenge.herokuapp.com/glovers', {
      answer: 42,
    }).then((data) => {
      //   setReload(true);
      window.location.reload(false);
      console.log('inside delete: ', data);
    });
  };

  return (
    <div>
      {person.name}{' '}
      <button onClick={() => deleteGlovo(person.id)}>delete glovo</button>
    </div>
  );
};

export default GlovoPerson;
