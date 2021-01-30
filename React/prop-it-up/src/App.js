
import './App.css';
import PersonalCard from './components/PersonCard ';

function App() {
  return (
    <div className="App">
      <PersonalCard firstName="Jaane" lastName="Doe" age={45} hairColor="Black"></PersonalCard>
      <PersonalCard firstName="Jone" lastName="Smith" age={88} hairColor="Brown"></PersonalCard>
      <PersonalCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"></PersonalCard>
      <PersonalCard firstName="Maria" lastName="Smith" age={62} hairColor="brown"></PersonalCard>

    </div>
  );
}

export default App;
