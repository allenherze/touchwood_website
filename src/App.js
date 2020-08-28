import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Landing />
      <footer className='footer'>
        <p className='lead'>Copyrights &copy;2020 Touchwood Inc.</p>
        <p className='lead'>Designed by Joshua Coutinho</p>
      </footer>
    </div>
  );
}

export default App;
