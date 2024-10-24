import React from 'react';
import './App.css';                                             //import the global styles for the app
import HobbySuggestion from './components/HobbySuggestion.js';  //import the HobbySuggestion

//main App component
function App(){
  return (
    <div className="App">
      {/*main header*/}
      <h1>More Dopamine</h1>
      {/*display HobbySuggestion component, that handles fetching and displaying hobbies*/}
      <HobbySuggestion />
    </div>
  );
}
export default App;
