"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./features/fetchDataSlice";
import { useAppSelector } from "./store";

export default function Home() {
  const dispatch: any = useDispatch();
  const data: any = useAppSelector((state: any) => state.fetchData.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(data);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {data?.results?.map((item: any, key: any) => {
        return (
          <div className="py-5" key={key}>
            <img
              src={`http://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
              alt={item?.original_title}
              width={500}
              height={100}
              className="rounded-lg"
            />
            <span>
              {item?.original_title} {item?.release_date}
            </span>
            <hr />
            <span>{item?.overview}</span>
          </div>
        );
      })}
    </div>
  );
}
