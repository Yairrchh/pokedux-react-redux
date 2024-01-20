import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemons, getPokemonsDetails } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
    pokemons: [],

}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_,{dispatch}) => {
        //dispatch loader
        dispatch(setLoading(true))
        const pokemonsRes = await getPokemons();
        const pokemonsDetail = await Promise.all(pokemonsRes.map(pokemon => getPokemonsDetails(pokemon)))
        dispatch(setPokemons(pokemonsDetail))
        dispatch(setLoading(false))
        //dispatch loader
    }
)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {

                const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
                    return pokemon.id === action.payload.pokemonId;
                })

                if (currentPokemonIndex >= 0) {

                    const isFavorite = state.pokemons[currentPokemonIndex].favorite;

                    state.pokemons[currentPokemonIndex].favorite = !isFavorite;
                }
        }
    }
})

export const {setFavorite, setPokemons} = dataSlice.actions;
console.log (dataSlice)

export default dataSlice.reducer;