"use client";

import MovieTrending from "./components/MovieTrending";
import PeopleTrending from "./components/PeopleTrending";
import SeriesTrending from "./components/SeriesTrending";

const App = () => {
  return (
    <div className="flex flex-col">
      <div>
        <MovieTrending />
      </div>
      <div className="px-2 py-2 space-y-4 ">
        <SeriesTrending />
        <PeopleTrending />
      </div>
    </div>
  );
};

export default App;
