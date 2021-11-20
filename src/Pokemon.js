import { useState, useEffect } from "react"

const initialState = { name: "", height: "", weight: "", sprites: { front_default: "" } }

function Pokemon(props) {
  const [pokemon, setPokemon] = useState(initialState)

  useEffect(() => {
    async function getData() {
      const response = await fetch(props.pokemon.url)
      const data = await response.json()
      setPokemon(data)
    }

    getData()
  }, [props.pokemon])

  useEffect(() => {
    return () => {
      localStorage.removeItem("pokemon")
    }
  }, [])

  return (
    <div className="pokemon">
      <img alt="" src={pokemon.sprites.front_default} />
      <h2>{pokemon.name}</h2>
      <h2>height: {pokemon.height}</h2>
      <h2>weight: {pokemon.weight}</h2>
    </div>
  )
}
export default Pokemon