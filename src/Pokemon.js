function Pokemon(props) {

  return (
    <div className="pokemon">
      <img alt="" src="" />
      <h2>{props.pokemon.name}</h2>
      <h2>height:</h2>
      <h2>weight:</h2>
    </div>
  )
}
export default Pokemon