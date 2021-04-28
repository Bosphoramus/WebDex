import MainLayout from '~/components/layouts/MainLayout'
import { useQuery } from 'react-query'

async function getPokemon() {
    const pokemonIndex = await getPokemonIndex()
    const pokemonData = await Promise.all(pokemonIndex.results.map(pokemon => getPokemonData(pokemon.url)))
    return pokemonData
}

async function getPokemonIndex() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=300&offset=200`)
    return res.json()
}

async function getPokemonData(pokemonUrl) {
    const res = await fetch(`${pokemonUrl}`)
    return res.json()
}

export default function Pokedex() {
    const pokemonQuery = useQuery('POKEMON', getPokemon)

    if (pokemonQuery.isLoading) {
        return (
            <div>
                <p>Cargando Pokemon</p>
            </div>
        )
    }

    if (pokemonQuery.isError) {
        return (
            <div>
                <p>Error cargando Pokemon: {pokemonQuery.error?.message}</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {
                pokemonQuery.data.map(pokemon =>
                    <div key={pokemon.id}>
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <img className="lg:h-48 md:h-36 mx-auto" src={pokemon.sprites.front_default} alt={pokemon.id} />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">#{pokemon.id}</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
                                <div className="flex items-center flex-wrap ">
                                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14" />
                                            <path d="M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

Pokedex.Layout = MainLayout
