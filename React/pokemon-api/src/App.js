import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [pokemon, setPokemon] = useState([]);
  const clickHandler=() => {
      fetch('https://pokeapi.co/api/v2/pokemon/')
          .then(response => response.json())
          .then(response => setPokemon(response.results))
  };
  return (
    <div className="App">
      <>
      <button onClick={clickHandler}>fetch Pokimon</button>
      <ul>
            {pokemon.length > 0 && pokemon.map((poki, index)=>{
                return (<li key={index}>{poki.name}</li>)
            })}
        </ul>
      </>
    </div>
  );
}

export default App;
