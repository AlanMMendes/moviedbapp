"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Loading from "./components/Loading";
import MovieTrending from "./components/MovieTrending";
import PeopleTrending from "./components/PeopleTrending";
import SeriesTrending from "./components/SeriesTrending";
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
  }, [dispatch]);

  return (
    <>
      {dataMovies.status === "succeeded" ? (
        <div className="flex flex-col px-2">
          <MovieTrending />
          <SeriesTrending />
          <PeopleTrending />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default App;
