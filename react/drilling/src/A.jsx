import React from 'react';
import B from './B';
import Card from './Card';

function A({ name, setName }) {
  return (
    <>
      <Card title="Component A" name={name} />
      <B name={name} setName={setName} />
    </>
  );
}

export default A;