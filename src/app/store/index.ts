// store.js
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import fetchDataSlice from "../features/fetchDataSlice"; // Importe o slice que você criará mais tarde
import fetchParticipantsSlice from "../features/fetchParticipantsSlice";

export const store = configureStore({
  reducer: {
    fetchData: fetchDataSlice, // Adicione seu slice aqui
    fetchParticipants: fetchParticipantsSlice, // Adicione seu slice aqui
  },
});

// Exportando o hook para usar o store no React
export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector: any) => useSelector(selector);
