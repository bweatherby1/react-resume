import React from 'react';
import Loading from '@/components/Loading';

export default function Props() {
  return (
    <div>
      <Loading /> {/* OPEN THE LOADING COMPONENT TO SEE HOW THE PROPS ARE HANDLED */}
      <Loading color="green" />
      <Loading color="orange" />
      <Loading color="purple" />

      {/* CHILDREN */}
      <Loading>
        <p>The children are between BOTH and opening and closing tag for the component</p>
      </Loading>
    </div>
  );
}
