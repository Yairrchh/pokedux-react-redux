import { SET_LOADING, SET_POKEMONS } from "./types";
import { getPokemonsDetails } from "../api";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
})

export const getPokemonsWithDetail =
    (pokemons = []) =>
    async (dispatch) => {
        const pokemonsDetail = await Promise.all(pokemons.map(pokemon => getPokemonsDetails(pokemon)))
        dispatch(setPokemons(pokemonsDetail));
    }

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload,
})