import { redirect } from "next/navigation";

function PokemonPage() {
  redirect("/dashboard/pokemons");
}

export default PokemonPage;
