import { useState } from 'react'
import MainLayout from '~/components/layouts/MainLayout'
import PokemonRangeFilter from '~/components/PokemonRangeFilter'
import PokemonList from '~/components/PokemonList'

export default function WebDex() {
  const [pokemonRangeFilter, setPokemonRangeFilter] = useState([1, 150])

  return (
    <>
      <PokemonRangeFilter pokemonRangeFilter={pokemonRangeFilter} setPokemonRangeFilter={setPokemonRangeFilter} />
      <PokemonList pokemonRangeFilter={pokemonRangeFilter} />
    </>
  )
}

WebDex.Layout = MainLayout
