import React from 'react';
import D from './D';
import Card from './Card';

function C({ name, setName }) {
  return (
    <>
      <Card title="Component C" name={name} />
      <D name={name} setName={setName} />
    </>
  );
}

export default C;