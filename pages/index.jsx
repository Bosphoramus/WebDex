import { useState } from 'react'
import MainLayout from '~/components/layouts/MainLayout'
import PokemonFilterRange from '~/components/PokemonFilterRange'
import PokemonGrid from '~/components/PokemonGrid'

export default function Pokedex() {
  const [pokemonRangeFilter, setPokemonRangeFilter] = useState([0, 150])

  return (
    <>
      <PokemonFilterRange pokemonRangeFilter={pokemonRangeFilter} setPokemonRangeFilter={setPokemonRangeFilter} />
      <PokemonGrid pokemonRangeFilter={pokemonRangeFilter} />
    </>
  )
}

Pokedex.Layout = MainLayout
