import { useState } from 'react';
import pokemonData from './pokemon-data';
import PokemonList from './PokemonList'
import Pokemon from './Pokemon'

function App() {
  const [currentPokemon, setCurrentPokemon] = useState("")

  return (
    <div className="App">
      <div className="container">
        <PokemonList pokemonData={pokemonData.results} setCurrentPokemon={setCurrentPokemon} />
        <Pokemon pokemon={currentPokemon} />
      </div>
    </div>
  );
}

export default App;
