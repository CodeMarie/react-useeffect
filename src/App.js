import { useState } from 'react';
import pokemonData from './pokemon-data';
import PokemonList from './PokemonList'
import Pokemon from './Pokemon'
const initialPokemon = {
  name: 'pikachu',
  url: 'https://pokeapi.co/api/v2/pokemon/25'
}

function App() {
  const [currentPokemon, setCurrentPokemon] = useState(initialPokemon)

  return (
    <div className="App">
      <button onClick={() => setCurrentPokemon("")}>
        Clear Pokemon
      </button>
      <div className="container">
        <PokemonList
          pokemonData={pokemonData.results}
          setCurrentPokemon={setCurrentPokemon}
        />
        {currentPokemon && <Pokemon pokemon={currentPokemon} />}
      </div>
    </div>
  );
}

export default App;
