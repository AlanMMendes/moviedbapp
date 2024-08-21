"use client";

import MovieTrending from "@/app/components/MovieTrending";
import PeopleTrending from "@/app/components/PeopleTrending";
import SeriesTrending from "@/app/components/SeriesTrending";

const App = () => {
  return (
    <div className="relative w-full h-auto flex flex-col gap-5 ">
      <MovieTrending />
      <div className="h-auto w-full gap-2 flex flex-col px-4 ">
        <SeriesTrending />
        <PeopleTrending />
      </div>
    </div>
  );
};

export default App;
