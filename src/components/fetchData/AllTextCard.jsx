"use client";
import React from "react";
import TextDetailCard from "../card/TextDetailCard";
import { useGetAllPokemonQuery } from "@/redux/feature/pokemons/pokemon";
import TextDeatilCardSkeleton from "../card/skeleton/TextDeatilCardSkeleton";

export default function AllTextCard() {
  const { data, isLoading, error, isSuccess } = useGetAllPokemonQuery();
  return (
    <div className="h-1/2 p-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {isLoading ? (
        <>
          {[1, 2, 3].map((e) => (
            <TextDeatilCardSkeleton key={e} />
          ))}
        </>
      ) : null}
      {data?.results.map((e) => (
        <TextDetailCard title={e.name} key={e} />
      ))}
    </div>
  );
}
