import React from 'react';
import ReactDOM from 'react-dom/client';                  //import ReactDOM for rendering the app
import './index.css';                                     //import global CSS styles
import App from './App.js';                               //import main App component

//react root for rendering the application in the div with id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

//render main App component into the root element of the page
root.render(<App />);
