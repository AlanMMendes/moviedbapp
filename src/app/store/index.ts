// store.js
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import fetchDataSlice from "../features/fetchDataSlice"; // Importe o slice que você criará mais tarde
import fetchEpisodesSlice from "../features/fetchEpisodesSlice";
import fetchMovieCreditsSlice from "../features/fetchMovieCredits";
import fetchPeopleDetailDataSlice from "../features/fetchPeopleDetails";
import fetchPeopleDataSlice from "../features/fetchPeopleSlice";
import fetchSerieCreditsSlice from "../features/fetchSeriesCredits";
import fetchSeriesTrendingSlice from "../features/fetchSeriesTrendingSlice";
import fetchShowSlice from "../features/fetchShow";
import fetchVideosSlice from "../features/fetchVideosSlice";
import watchListReducer from "../features/watchListSlice";

export const store = configureStore({
  reducer: {
    fetchData: fetchDataSlice, // Adicione seu slice aqui
    fetchVideos: fetchVideosSlice, // Adicione seu slice aqui
    fetchSeriesTrending: fetchSeriesTrendingSlice,
    fetchSerieCredits: fetchSerieCreditsSlice,
    fetchMovieCredits: fetchMovieCreditsSlice,
    fetchPeopleData: fetchPeopleDataSlice,
    fetchPeopleDetailsData: fetchPeopleDetailDataSlice,
    watchList: watchListReducer,
    fetchShow: fetchShowSlice,
    fetchEpisodes: fetchEpisodesSlice,
  },
});

// Exportando o hook para usar o store no React
export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector: any) => useSelector(selector);
