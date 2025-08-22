import React from 'react';
import C from './C';
import Card from './Card';

function B({ name, setName }) {
  return (
    <>
      <Card title="Component B" name={name}>
        <input type="text" className="myinput" />
        <button onClick={() => {
          const newName = document.querySelector(".myinput").value;
          if (newName.trim() === "") {
              alert("Input cannot be empty!");
              return;
          }
          setName(newName);
          document.querySelector(".myinput").value = "";
        }}>
         Click
        </button>
      </Card>
      <C name={name} setName={setName} />
    </>
  );
}

export default B;