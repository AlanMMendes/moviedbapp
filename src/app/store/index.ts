// store.js
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import fetchDataSlice from "../features/fetchDataSlice"; // Importe o slice que você criará mais tarde
import fetchMovieCreditsSlice from "../features/fetchMovieCredits";
import fetchPeopleDetailDataSlice from "../features/fetchPeopleDetails";
import fetchPeopleDataSlice from "../features/fetchPeopleSlice";
import fetchSeriesTrendingSlice from "../features/fetchSeriesTrendingSlice";
import fetchVideosSlice from "../features/fetchVideosSlice";

export const store = configureStore({
  reducer: {
    fetchData: fetchDataSlice, // Adicione seu slice aqui
    fetchVideos: fetchVideosSlice, // Adicione seu slice aqui
    fetchSeriesTrending: fetchSeriesTrendingSlice,
    fetchMovieCredits: fetchMovieCreditsSlice,
    fetchPeopleData: fetchPeopleDataSlice,
    fetchPeopleDetailsData: fetchPeopleDetailDataSlice,
  },
});

// Exportando o hook para usar o store no React
export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector: any) => useSelector(selector);
