import logo from './logo.svg';
import './App.css';
import React,{useState}from 'react'
import ContentDisplay from './components/ContentDisplay';

function App() {
  const [currentTab,setCurrentTab] = useState([
    {
      label:"Tab1",
      content:"This is Tab 1"
    },
    {
      label:"Tab2",
      content:"This is Tab 2"
    },
    {
      label:"Tab3",
      content:"This is Tab 3"
    }
  ]);
  return (
    <div className="App">
    <ContentDisplay currentTab={currentTab}/>
    </div>
  );
}

export default App;
