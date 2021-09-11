import React, { useEffect, useState } from 'react';
import GlovoPerson from './GlovoPerson';

const Container = () => {
  const [person, setPerson] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const url = 'https://crud-challenge.herokuapp.com/glovers';
      const response = await fetch(url, {
        headers: { 'interview-id': 'superman' },
      });
      const result = await response.json();
      setPerson(result);
    }
    fetchData();
  }, []);

  const nameList = Object.entries(person).map((a) => a[1]);

  return (
    <div>
      {nameList.map((a) => (
        <GlovoPerson person={a} />
      ))}
    </div>
  );
};

export default Container;
