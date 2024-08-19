"use client";
import MovieTrending from "./components/MovieTrending";
import Navbar from "./components/Navbar";
import PeopleTrending from "./components/PeopleTrending";
import SeriesTrending from "./components/SeriesTrending";
import WatchList from "./components/WatchList";

export default function Home() {
  return (
    <div className="relative w-full h-auto flex flex-col gap-5 py-9">
      <div className="h-auto w-full">
        <div className="fixed top-0 right-0 z-50 bg-zinc-950 w-full">
          <Navbar />
        </div>
        <MovieTrending />
      </div>
      <div className="h-auto w-full gap-8 flex flex-col px-4 py-5">
        <SeriesTrending />
        <PeopleTrending />
        <WatchList />
      </div>
    </div>
  );
}
