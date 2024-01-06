import {
  PokemonFavorites,
  PokemonGrid,
  PokemonsResponse,
  SimplePokemon,
} from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "Listado de pokemons favoritos",
};

async function PakemonsPage() {
  return (
    <div className="flex flex-col p-5">
      <span className="my-2 text-5xl">
        Listado de Pokemons <small>favoritos</small>
      </span>

      <PokemonFavorites />
    </div>
  );
}

export default PakemonsPage;
