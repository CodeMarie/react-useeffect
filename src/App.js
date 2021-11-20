import { useState, useEffect } from 'react';
import PokemonList from './PokemonList'
import Pokemon from './Pokemon'
import pokemons from './pokemon-data';

const initialPokemon = {
  name: 'pikachu',
  url: 'https://pokeapi.co/api/v2/pokemon/25'
}

function App() {
  const [currentPokemon, setCurrentPokemon] = useState(initialPokemon)
  const [pokemonData, setPokemonData] = useState([])

  useEffect(() => {
    const pokemon = localStorage.getItem("pokemon")

    if (pokemon) {
      setCurrentPokemon(JSON.parse(pokemon))
    }

    async function getData() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await response.json()

        setPokemonData(data.results)
      } catch {
        setPokemonData(pokemons.results)
      }
    }

    getData()
  }, [])

  useEffect(() => {
    document.title = currentPokemon.name
    if (currentPokemon) {
      localStorage.setItem("pokemon", JSON.stringify(currentPokemon))
    }
  }, [currentPokemon])

  return (
    <div className="App">
      <button onClick={() => setCurrentPokemon("")}>
        Clear Pokemon
      </button>

      <div className="container">
        <PokemonList
          pokemonData={pokemonData}
          setCurrentPokemon={setCurrentPokemon}
        />
        {currentPokemon && <Pokemon pokemon={currentPokemon} />}
      </div>
    </div>
  );
}

export default App;
