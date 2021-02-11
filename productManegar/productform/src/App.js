import React, {useState} from 'react';
import './App.css'
import Main from './views/Main';
import Detail from './views/Details'
import { Router } from '@reach/router';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Main path="newProduct/"/>
        <Detail path="api/product/:id"/>
      </Router>
    </div>
  );
}
export default App;
