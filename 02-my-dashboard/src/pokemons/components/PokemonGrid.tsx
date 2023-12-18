import { PokemonCard, SimplePokemon } from "..";

interface Props {
  pokemons: SimplePokemon[];
}

function PokemonGrid({ pokemons }: Props) {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonGrid;
