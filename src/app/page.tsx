"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AiringToday from "./components/AiringToday";
import Loading from "./components/Loading";
import MovieTrending from "./components/MovieTrending";
import PeopleTrending from "./components/PeopleTrending";
import SeriesTrending from "./components/SeriesTrending";
import { fetchAiringToday } from "./features/fetchAiringTodaySlice";
import { fetchData } from "./features/fetchDataSlice";
import { fetchPeopleData } from "./features/fetchPeopleSlice";
import { fetchSeriesTrending } from "./features/fetchSeriesTrendingSlice";
import { useAppSelector } from "./store";

import * as Separator from "@radix-ui/react-separator";

const App = () => {
  const dispatch: any = useDispatch();
  const dataSeries: any = useAppSelector(
    (state: any) => state?.fetchSeriesTrending
  );
  const dataMovies: any = useAppSelector((state: any) => state?.fetchData);

  useEffect(() => {
    dispatch(fetchSeriesTrending());
    dispatch(fetchData());
    dispatch(fetchPeopleData());
    dispatch(fetchAiringToday());
  }, [dispatch]);

  return (
    <>
      {dataMovies.status === "succeeded" ? (
        <div className="flex flex-col">
          <MovieTrending />
          <Separator.Root className="bg-white bg-opacity-10 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
          <div className="flex flex-col  gap-2">
            <AiringToday />
            <Separator.Root className="bg-white bg-opacity-10 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
            <SeriesTrending />
            <Separator.Root className="bg-white bg-opacity-10 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
            <PeopleTrending />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default App;
