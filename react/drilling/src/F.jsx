import React from 'react';
import Card from './Card';

function F({ name }) {
  return (
    <>
      <Card title="Component F" name={name} />
    </>
  );
}

export default F;