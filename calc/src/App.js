import React, { useState } from 'react';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <header>
        <h1>React Calculator</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌞' : '🌙'}
        </button>
      </header>
      <Calculator />
      <div className="bubbles">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>

    </div>
  );
}

export default App;
