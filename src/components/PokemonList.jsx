import { PokemonCard } from "./PokemonCard";

const PokemonList = ({pokemons}) => {
    console.log(pokemons)
    return (
        <div className='PokemonList flex flex-wrap items-center justify-center gap-20 mt-10'>
            {pokemons.map((pokemon) => {
                return <PokemonCard name={pokemon.name} key={pokemon.name}/>;
            })}
        </div>
    )
};

// PokemonList.defaultProps = {
//     pokemons: Array(10).fill('')
// };


export {PokemonList};