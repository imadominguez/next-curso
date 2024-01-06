"use client";

import Link from "next/link";

import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { SimplePokemon } from "@/pokemons";
import { toggleFavorite } from "@/store/pokemons/pokemons";

interface Props {
  pokemon: SimplePokemon;
}

function PokemonCard({ pokemon }: Props) {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector((state) => !!state.pokemons[id]);
  const dispatch = useAppDispatch();

  const togglePokemonFavorite = () => {
    dispatch(toggleFavorite(pokemon));
  };
  return (
    <div className="right-0 mx-auto mt-2 w-60">
      <div className="overflow-hidden rounded bg-white shadow-lg">
        <div className="flex flex-col items-center border-b bg-gray-800 p-6 text-center">
          <Image
            width={100}
            height={100}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={name}
            priority={false}
            className="h-24 w-24 rounded-full"
          />
          <p className="pt-2 text-lg font-semibold capitalize text-gray-50">
            {name}
          </p>
          <p className="text-sm text-gray-100">John@Doe.com</p>
          <div className="mt-5">
            <Link
              href={`pokemons/${name}`}
              className="rounded-full border px-4 py-2 text-xs font-semibold text-gray-100"
            >
              Mas informacion
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            onClick={togglePokemonFavorite}
            className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100"
          >
            <div className="text-red-600">
              {isFavorite ? <IoHeart /> : <IoHeartOutline />}
            </div>

            <div className="pl-3">
              <p className="text-sm font-medium leading-none text-gray-800">
                {isFavorite ? "Favorito" : "No es favorito"}
              </p>
              <p className="text-xs text-gray-500">
                {isFavorite ? "Sacar de favorito" : "Agregar a favorito"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
