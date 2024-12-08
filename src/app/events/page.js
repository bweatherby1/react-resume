'use client';

import React, { useState } from 'react';

export default function Events() {
  const [eventText, setEventText] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    setEventText('Button was Clicked!');
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    setEventText(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEventText('Form Submitted!');
  };

  const handleReset = () => {
    setInputValue('');
    setEventText('');
  };

  return (
    <>
      <h1>Events</h1>
      <h3 className="watch-event">{eventText || 'Welcome to events!'}</h3>

      <h4>Button</h4>
      <button className="btn btn-success" type="button" onClick={handleClick}>
        Click Event
      </button>
      <hr />

      <h4>Input</h4>
      <input placeholder="Change Event" value={inputValue} onChange={handleChange} />
      <hr />

      <h4>Form</h4>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="btn btn-info">
          Submit Event
        </button>
      </form>
      <hr />

      <button type="button" className="btn btn-warning" onClick={handleReset}>
        Reset
      </button>
    </>
  );
}
