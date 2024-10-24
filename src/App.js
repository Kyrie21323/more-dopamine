import React from 'react';
import './App.css';
import HobbySuggestion from './components/HobbySuggestion.js'; // Ensure the correct import path

function App() {
  return (
    <div className="App">
      <h1>More Dopamine</h1>
      <HobbySuggestion /> {/* Display the HobbySuggestion component */}
    </div>
  );
}

export default App;
