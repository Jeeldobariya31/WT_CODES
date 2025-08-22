import React from 'react';
import C from './C';
import Card from './Card';

function B({ name, setName, inputValue, setInputValue }) {
  return (
    <>
      <Card title="Component B" name={name}>
        <button onClick={() => {
          if (inputValue.trim() === "") {
              alert("Input cannot be empty!");
              return;
          }
          setName(inputValue);
          setInputValue("");
        }}>
         Click
        </button>
      </Card>
      <C name={name} setName={setName} />
    </>
  );
}

export default B;