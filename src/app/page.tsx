"use client";

import MovieTrending from "./components/MovieTrending";
import PeopleTrending from "./components/PeopleTrending";
import SeriesTrending from "./components/SeriesTrending";

export default function Home() {
  return (
    <div className="relative w-full h-auto flex flex-col gap-5">
      <div className="h-auto w-full">
        <MovieTrending />
      </div>

      <div className="h-auto w-full gap-10 flex flex-col px-4">
        <SeriesTrending />
        <PeopleTrending />
      </div>
    </div>
  );
}
