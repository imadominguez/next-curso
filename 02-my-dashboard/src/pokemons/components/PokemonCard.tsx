import Link from "next/link";
import { SimplePokemon } from "..";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}

function PokemonCard({ pokemon }: Props) {
  const { id, name } = pokemon;
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center flex flex-col items-center p-6 bg-gray-800 border-b">
          <Image
            width={100}
            height={100}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={name}
            priority={false}
            className="w-24 h-24 rounded-full"
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
          <p className="text-sm text-gray-100">John@Doe.com</p>
          <div className="mt-5">
            <Link
              href={`pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Mas informacion
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link
            href={`pokemon/${id}`}
            className="px-4 py-2 flex items-center hover:bg-gray-100"
          >
            <div className="text-red-600">
              <IoHeartOutline />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                No es favorito
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
