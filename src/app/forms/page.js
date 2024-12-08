'use client'

import React, { useState } from 'react';
import Form from '@/components/Form';
import NameCard from '@/components/NameCard';

export default function Forms() {
  const [names, setNames] = useState([]);
  const [editItem, setEditItem] = useState({});

  const addPerson = (newPerson) => {
    setNames((prevState) => [...prevState, newPerson]);
  };

  return (
    <>
      {names.map((person) => (
        <NameCard key={person.name} person={person} setEditItem={setEditItem} />
      ))}
      <Form obj={editItem} addPerson={addPerson} setEditItem={setEditItem} />
    </>
  );
}
