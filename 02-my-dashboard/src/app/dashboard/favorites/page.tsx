import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "Listado de pokemons favoritos",
};

async function PakemonsPage() {
  return (
    <div className="flex flex-col p-5">
      <span className="text-5xl my-2">
        Listado de Pokemons <small>favoritos</small>
      </span>

      <PokemonGrid pokemons={[]} />
    </div>
  );
}

export default PakemonsPage;
