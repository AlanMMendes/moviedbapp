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
          <div className="flex flex-col w-full gap-5 border-gray-500 px-2">
            <AiringToday />
            <SeriesTrending />
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
