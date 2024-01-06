"use client";
import { PokemonGrid } from "@/pokemons";
import { useAppSelector } from "@/store";

function PokemonFavorites() {
  const favoritespokemons = useAppSelector((state) =>
    Object.values(state.pokemons),
  );
  return <PokemonGrid pokemons={favoritespokemons} />;
}

export default PokemonFavorites;
