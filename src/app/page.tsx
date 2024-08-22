"use client";

import MovieTrending from "./components/MovieTrending";
import Navbar from "./components/Navbar";
import PeopleTrending from "./components/PeopleTrending";
import SeriesTrending from "./components/SeriesTrending";

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <MovieTrending />
      <div className="px-2 py-2 space-y-4 ">
        <SeriesTrending />
        <PeopleTrending />
      </div>
    </div>
  );
};

export default App;
