const baseUrl = "https://pokeapi.co/api/v2/pokemon"

function Pokemon(props) {
  return (
    <div className="pokemon">
      {props.pokemon.name}
    </div>
  )
}
export default Pokemon