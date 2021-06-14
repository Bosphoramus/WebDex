import { useQuery } from 'react-query'
import Loading from './layouts/partials/Loading'
import styles from '~/styles/pokemonCard.module.css'

async function getPokemon({ queryKey }) {
    const pokemonIndex = await getPokemonIndex(queryKey[1], queryKey[2])
    const pokemonData = await Promise.all(pokemonIndex.results.map(pokemon => getPokemonData(pokemon.url)))
    return pokemonData
}

async function getPokemonIndex(offset, limit) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit - offset}`)
    return res.json()
}

async function getPokemonData(pokemonURL) {
    const pokemonGeneralData = await getPokemonGeneralData(pokemonURL)
    const pokemonSpeciesData = await getPokemonSpeciesData(pokemonGeneralData.species.url)

    pokemonGeneralData.description = pokemonSpeciesData.flavor_text_entries[0].flavor_text

    return pokemonGeneralData
}

async function getPokemonGeneralData(pokemonURL) {
    const res = await fetch(`${pokemonURL}`)
    return res.json()
}

async function getPokemonSpeciesData(pokemonSpeciesURL) {
    const res = await fetch(`${pokemonSpeciesURL}`)
    return res.json()
}

export default function PokemonGrid({ pokemonRangeFilter }) {
    const [offset, limit] = pokemonRangeFilter
    const pokemonQuery = useQuery(['POKEMON', offset, limit], getPokemon)

    if (pokemonQuery.isLoading) {
        return (
            <div className="flex justify-center h-screen">
                <div>
                    <Loading />
                    <p className="font-bold">Loading Pokemon</p>
                </div>
            </div>
        )
    }

    if (pokemonQuery.isError) {
        return (
            <div className="flex justify-center h-screen">
                <div>
                    <p>An error ocurred while loading Pokemon: {pokemonQuery.error?.message}</p>
                </div>
            </div>
        )
    }

    return (
        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 ${styles.pokemonCard}`}>
            {
                pokemonQuery.data.map(function (pokemon) {
                    return (
                        <div key={pokemon.id} className="flex flex-col max-w-sm sm:max-w-none mx-auto justify-between border-2 border-gray-200 hover:border-red-400 border-opacity-60 p-5 rounded-lg shadow-lg dark:border-gray-600 dark:hover:border-red-600 dark:shadow-lg-invert">
                            <div>
                                <img className={`lg:h-48 md:h-36 mx-auto ${styles.pokemonPortrait}`} src={pokemon.sprites.front_default} alt={pokemon.id} />
                            </div>
                            <div>
                                <span className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">#{pokemon.id}</span>
                                <p className="title-font text-lg font-medium mb-3">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
                                <p className="hidden md:block">{pokemon.description.replace(/(\f)/gm, " ")}</p>
                            </div>
                            <div className="md:mt-2">
                                <a className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0 hover:animate-bounce" href={`https://pokemon.fandom.com/wiki/${pokemon.name}`}>Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14" />
                                        <path d="M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}
