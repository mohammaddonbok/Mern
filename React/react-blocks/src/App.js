
import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigator from './components/Navigator';
import SubContent from './components/SubContent';
import Main from './components/Main';
import Advertisement from './components/Advertisement';
function App() {
  return (
    <div className="App">
        <Header/>
        <Navigator/>
        <Main>
          <SubContent/>
          <SubContent/>
          <SubContent/>
          <Advertisement/>
        </Main>
    </div>
  );
}

export default App;
