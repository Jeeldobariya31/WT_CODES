import React from 'react';

const Card = ({ title, name, children }) => {
  return (
    <div className="card">
      {title && <h3 className="component-title">{title}</h3>}
      {name && <h2>Hello, {name}!</h2>}
      {children}
    </div>
  );
};

export default Card;