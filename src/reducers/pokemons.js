/* eslint-disable no-case-declarations */
import { fromJS, getIn, setIn, get } from "immutable";
import { SET_FAVORITE, SET_POKEMONS } from "../actions/types"

const initialState = fromJS({
    pokemons: [],
});

export const pokemonsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POKEMONS:
            //return {...state, pokemons: action.payload};
            return setIn(state, ['pokemons'], fromJS(action.payload))
            case SET_FAVORITE:
                //const newPokemonsList = [...state.pokemons];
                //const currentPokemonIndex = newPokemonsList.findIndex((pokemon) => {
                //return pokemon.id === action.payload.pokemonId;
                //});

                const currentPokemonIndex = get(state, 'pokemons').findIndex((pokemon) => {
                    return pokemon.get('id') === action.payload.pokemonId;
                })

                if (currentPokemonIndex < 0) {
                    return state;
                }

            // newPokemonsList[currentPokemonIndex].favorite = !newPokemonsList[currentPokemonIndex].favorite;

            //     return { ...state, pokemons: newPokemonsList }
            const isFavorite = getIn(state, ['pokemons',currentPokemonIndex, 'favorite'])
                return setIn(state, ['pokemons', currentPokemonIndex, 'favorite'], !isFavorite)


            default:
                return state;
    }
}