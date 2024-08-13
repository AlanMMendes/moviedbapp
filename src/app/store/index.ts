// store.js
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import fetchDataSlice from "../features/fetchDataSlice"; // Importe o slice que você criará mais tarde
import fetchImgSlice from "../features/fetchImgSlice";

export const store = configureStore({
  reducer: {
    fetchData: fetchDataSlice, // Adicione seu slice aqui
    fetchImg: fetchImgSlice, // Adicione seu slice aqui
  },
});

// Exportando o hook para usar o store no React
export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector: any) => useSelector(selector);
