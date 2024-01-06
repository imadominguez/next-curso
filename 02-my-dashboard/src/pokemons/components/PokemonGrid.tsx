import { PokemonCard, SimplePokemon } from "..";

interface Props {
  pokemons: SimplePokemon[];
}

function PokemonGrid({ pokemons }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonGrid;
