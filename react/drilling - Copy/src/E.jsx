import React from 'react';
import F from './F';
import Card from './Card';

function E({ name, setName }) {
  return (
    <>
      <Card title="Component E" name={name} />
      <F name={name} setName={setName} />
    </>
  );
}

export default E;
