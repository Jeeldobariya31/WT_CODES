import React from 'react';
import E from './E';
import Card from './Card';

function D({ name, setName }) {
  return (
    <>
      <Card title="Component D" name={name} />
      <E name={name} setName={setName} />
    </>
  );
}

export default D;