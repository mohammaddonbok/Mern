import React,{useState}from 'react'
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import MessageDisplay from './components/MessageDisplay';
import MessageForm from './components/MessageForm';
function App() {
  const [currentMsg,setCurrentMsg] = useState([]);
  const youveGotMail = ( newMessage) => {
    setCurrentMsg( currentMsg.concat(newMessage) );
}
  return (
    <div className="App">
        <HeaderComponent/>
        <MessageForm youveGotMail={ youveGotMail }/>
        <MessageDisplay message={currentMsg}/>
    </div>
  );
}

export default App;