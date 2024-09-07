"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Loading from "./components/Loading";
import MovieTrending from "./components/MovieTrending";
import Navbar from "./components/Navbar";
import PeopleTrending from "./components/PeopleTrending";
import Series from "./components/Series";
import { fetchAiringToday } from "./features/fetchAiringTodaySlice";
import { fetchData } from "./features/fetchDataSlice";
import { fetchPeopleData } from "./features/fetchPeopleSlice";
import { fetchSeriesTrending } from "./features/fetchSeriesTrendingSlice";
import { useAppSelector } from "./store";

const App = () => {
  const dispatch: any = useDispatch();
  const dataMovies: any = useAppSelector((state: any) => state?.fetchData);
  const dataAiringToday: any = useAppSelector(
    (state: any) => state.fetchAiringToday
  );
  const dataSeriesTrending: any = useAppSelector(
    (state: any) => state.fetchSeriesTrending
  );
  const dataPeopleTrending: any = useAppSelector(
    (state: any) => state.fetchPeopleData
  );

  useEffect(() => {
    dispatch(fetchSeriesTrending());
    dispatch(fetchData());
    dispatch(fetchPeopleData());
    dispatch(fetchAiringToday());
  }, [dispatch]);

  if (dataMovies?.status === "idle") return <Loading />;
  if (dataMovies?.status === "loading") return <Loading />;
  if (dataMovies?.status === "error") return <div>Error</div>;

  return (
    <div className="flex flex-col relative">
      <Navbar />
      <MovieTrending data={dataMovies} />
      <div className="px-2 gap-4 flex flex-col">
        <Series
          data={dataAiringToday}
          title={"Airing Today"}
          query={"airing_today"}
        />
        <Series
          data={dataSeriesTrending}
          title={"Series Trending"}
          query={"popular"}
        />
        <PeopleTrending data={dataPeopleTrending} />
      </div>
    </div>
  );
};

export default App;
