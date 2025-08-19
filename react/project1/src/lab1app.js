import React from 'react';
import Navbar from './lab1nev';
import MainContent from './lab1maincontent';
import Sidebar from './lab1sidebar';
import Footer from './lab1footer';

function Lab1_App() {
  return (
    <div className='row'>
    <div className=' col-md-12'>
      <Navbar />
      <main className="container my-4">
        <div className="row">
          <div className='col-8'> <MainContent /></div>
          <div  className='col-1'></div>
          <div className='col-3'> <Sidebar /></div>
        </div>
      </main>
      <Footer />
    </div>
    </div>
  );
}

export default Lab1_App;
