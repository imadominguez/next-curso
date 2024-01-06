import { SimplePokemon } from "@/pokemons";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

/*

{
  '1': {id: 1, name: 'bulbasur'},
  '2': {
    id: 2,
    name: 'ivysaur',
  },
  '3': {
    id: 3,
    name: 'venusaur',
  },
  '4': {
    id: 4,
    name: 'charmander',
  },
}

*/

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonsState = {
  "1": {
    id: "1",
    name: "bulbasur",
  },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state[id]) {
        delete state[id];
        return;
      } else {
        state[id] = pokemon;
      }
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
