"use client";

import MovieTrending from "./components/MovieTrending";
import PeopleTrending from "./components/PeopleTrending";
import SeriesTrending from "./components/SeriesTrending";

export default function Home() {
  return (
    <>
      <MovieTrending />
      <SeriesTrending />
      <PeopleTrending />
    </>
  );
}
