import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import fetchAiringTodaySlice from "../features/fetchAiringTodaySlice";
import fetchDataSlice from "../features/fetchDataSlice";
import fetchEpisodesProvider from "../features/fetchEpisodesProvider";
import fetchEpisodesSlice from "../features/fetchEpisodesSlice";
import fetchPeopleDataSlice from "../features/fetchPeopleSlice";
import fetchSearchSlice from "../features/fetchSearchSlice";
import fetchSeriesTrendingSlice from "../features/fetchSeriesTrendingSlice";
import fetchShowSlice from "../features/fetchShowSlice";
import fetchTrailerSeason from "../features/fetchTrailerSeasonSlice";
import fetchVideosSlice from "../features/fetchVideosSlice";
import watchListReducer from "../features/watchListSlice";

export const store = configureStore({
  reducer: {
    fetchData: fetchDataSlice,
    fetchVideos: fetchVideosSlice,
    fetchSeriesTrending: fetchSeriesTrendingSlice,
    fetchPeopleData: fetchPeopleDataSlice,
    watchList: watchListReducer,
    fetchShow: fetchShowSlice,
    fetchEpisodes: fetchEpisodesSlice,
    fetchSearch: fetchSearchSlice,
    fetchTrailerSeason: fetchTrailerSeason,
    fetchEpisodesProvider: fetchEpisodesProvider,
    fetchAiringToday: fetchAiringTodaySlice,
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector: any) => useSelector(selector);
