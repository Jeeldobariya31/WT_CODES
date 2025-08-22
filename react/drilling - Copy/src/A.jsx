import React, { useState } from 'react';
import B from './B';
import Card from './Card';

function A({ name, setName }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Card title="Component A" name={name}>
        <input 
          type="text" 
          className="myinput" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
        />
      </Card>
      <B name={name} setName={setName} inputValue={inputValue} setInputValue={setInputValue} />
    </>
  );
}

export default A;