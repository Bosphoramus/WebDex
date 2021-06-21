import { useState, useContext } from 'react'
import { Range, getTrackBackground } from 'react-range';
import { useQuery } from 'react-query'
import LoadingSpinner from '~/components/layouts/partials/LoadingSpinner'
import { ThemeContext } from '~/contexts/themeContext'

async function getPokemonMax() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon')
    return res.json()
}

const PokemonRangeFilter = ({ pokemonRangeFilter, setPokemonRangeFilter }) => {
    const [values, setValues] = useState([pokemonRangeFilter[0], pokemonRangeFilter[1]]);
    const maxPokemonQuery = useQuery('POKEMON_MAX', getPokemonMax)
    let max = maxPokemonQuery.data?.count || 1
    const { theme } = useContext(ThemeContext)
    const step = 1;
    const min = 1;
    const colors = [`${theme === "light" ? '#c1c1c1' : '#4b5563'}`, 'red', `${theme === "light" ? '#c1c1c1' : '#4b5563'}`];

    if (maxPokemonQuery.isLoading) {
        return (
            <div className="flex flex-col items-center">
                <LoadingSpinner />
                <p className="font-bold">Loading maximum pokemon number</p>
            </div>
        )
    }

    if (maxPokemonQuery.isError) {
        return (
            <div className="flex justify-center">
                <div>
                    <p className="font-bold">An error ocurred while loading maximum pokemon number: {maxPokemonQuery.error?.message}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex justify-center flex-wrap py-10 px-3 sm:px-0">
            <Range
                values={values}
                step={step}
                min={min}
                max={max}
                onChange={(values) => setValues(values)}
                onFinalChange={(values) => setPokemonRangeFilter(values)}
                renderTrack={({ props, children }) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={{
                            ...props.style,
                            height: '36px',
                            display: 'flex',
                            width: '100%'
                        }}
                    >
                        <div
                            ref={props.ref}
                            style={{
                                height: '5px',
                                width: '100%',
                                borderRadius: '4px',
                                background: getTrackBackground({
                                    values: values,
                                    colors: colors,
                                    min: min,
                                    max: max
                                }),
                                alignSelf: 'center'
                            }}
                        >
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({ props, isDragged, index }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '40px',
                            width: '40px',
                            borderRadius: '6px',
                            backgroundColor: `${theme === "light" ? '#ffff' : '#1f2633'}`,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: `${theme === "light" ? '0 4px 15px #aaa' : '0 4px 15px #797979'}`
                        }}>
                        <div
                            style={{
                                position: 'absolute',
                                top: '-35px',
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                                padding: '4px',
                                borderRadius: '4px',
                                backgroundColor: 'red',
                                minWidth: '2rem',
                                textAlign: 'center'
                            }}
                        >
                            {values[index]}
                        </div>
                        <div
                            style={{
                                height: '16px',
                                width: '5px',
                                backgroundColor: isDragged ? 'red' : `${theme === "light" ? '#c1c1c1' : '#4b5563'}`
                            }}
                        />
                    </div>
                )}
            />
        </div>
    );
};

export default PokemonRangeFilter;
