function PokemonList(props) {
  return (
    <div>
      {props.pokemonData.map((pokemon, index) =>
        <button key={index} onClick={() => props.setCurrentPokemon(pokemon)}>
          {pokemon.name}
        </button>
      )}
    </div>)
}
export default PokemonList