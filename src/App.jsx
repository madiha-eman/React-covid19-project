import React from 'react';
import './App.css';
import Api from './components/Api';
import Api2 from './components/Api2';
import Class from './components/Class';
import MediaCard from './components/MediaCard';

function App() {
  return (
    <div>
      <Class /> 
    <h1>COVID19-APP</h1>
    <Api />
    <Api2 />
    </div>
  );
}

export default App;
