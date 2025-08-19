import React from 'react';

function Sidebar() {
  return (
    <div className="row  ">
      <div className="card border-black rounded-4">
        <div className="card-header bg-black-subtle ">Sidebar</div>
        <div className="card-body bg-info-subtle text-info-emphasis border-black rounded-4">
          Some extra information or links here.
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
