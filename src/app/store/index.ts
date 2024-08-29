import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import alertReducer from "../features/alertSlice";
import fetchAiringTodaySlice from "../features/fetchAiringTodaySlice";
import fetchCastSlice from "../features/fetchCastSlice";
import fetchDataSlice from "../features/fetchDataSlice";
import fetchEpisodesProvider from "../features/fetchEpisodesProvider";
import fetchEpisodesSlice from "../features/fetchEpisodesSlice";
import fetchPeopleDataSlice from "../features/fetchPeopleSlice";
import fetchSearchSlice from "../features/fetchSearchSlice";
import fetchSeriesTrendingSlice from "../features/fetchSeriesTrendingSlice";
import fetchShowSlice from "../features/fetchShowSlice";
import fetchTrailer from "../features/fetchTrailerSlice";
import watchListReducer from "../features/watchListSlice";

export const store = configureStore({
  reducer: {
    fetchData: fetchDataSlice,
    fetchSeriesTrending: fetchSeriesTrendingSlice,
    fetchPeopleData: fetchPeopleDataSlice,
    watchList: watchListReducer,
    fetchShow: fetchShowSlice,
    fetchEpisodes: fetchEpisodesSlice,
    fetchSearch: fetchSearchSlice,
    fetchTrailer: fetchTrailer,
    fetchEpisodesProvider: fetchEpisodesProvider,
    fetchAiringToday: fetchAiringTodaySlice,
    fetchCast: fetchCastSlice,
    alert: alertReducer,
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector: any) => useSelector(selector);
