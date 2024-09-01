"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieTrending from "./components/MovieTrending";
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

  return (
    <div>
      <MovieTrending data={dataMovies} />
      <div className="flex flex-col gap-4 px-4">
        <div>
          <Series
            data={dataAiringToday}
            title={"Airing Today"}
            query={"airing_today"}
          />
        </div>
        <div>
          <Series
            data={dataSeriesTrending}
            title={"Series Trending"}
            query={"popular"}
          />
        </div>
        <div>
          <PeopleTrending data={dataPeopleTrending} />
        </div>
      </div>
    </div>
  );
};

export default App;
