import { Range, getTrackBackground } from 'react-range';
import { useQuery } from 'react-query'
import { useState } from 'react'
import Loading from '~/components/layouts/partials/Loading'

async function getPokemonMax() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon')
    return res.json()
}

const PokemonFilterRange = ({ pokemonRangeFilter, setPokemonRangeFilter }) => {
    const [values, setValues] = useState([pokemonRangeFilter[0], pokemonRangeFilter[1]]);
    const maxPokemonQuery = useQuery('POKEMON_MAX', getPokemonMax)
    let max = maxPokemonQuery.data?.count || 1
    const STEP = 1;
    const MIN = 0;
    const COLORS = ['#979797', 'red', '#979797'];

    if (maxPokemonQuery.isLoading) {
        return (
            <div className="flex justify-center">
                <div>
                    <Loading />
                    <p>Loading maximum pokemon number</p>
                </div>
            </div>
        )
    }

    if (maxPokemonQuery.isError) {
        return (
            <div className="flex justify-center">
                <div>
                    <p>An error ocurred while loading maximum pokemon number: {maxPokemonQuery.error?.message}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex justify-center flex-wrap py-10">
            <Range
                values={values}
                step={STEP}
                min={MIN}
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
                                    colors: COLORS,
                                    min: MIN,
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
                            height: '42px',
                            width: '42px',
                            borderRadius: '4px',
                            backgroundColor: '#FFF',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '0px 2px 6px #AAA'
                        }}

                    >
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
                                backgroundColor: isDragged ? COLORS[index] : '#CCC'
                            }}
                        />
                    </div>
                )}
            />
        </div>
    );
};

export default PokemonFilterRange;
