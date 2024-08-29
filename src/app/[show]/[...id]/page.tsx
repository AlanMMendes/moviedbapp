"use client";
import { fetchShow } from "@/app/features/fetchShowSlice";
import { useAppSelector } from "@/app/store";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../globals.css";
import ShowMovies from "./components/Movies";
import ShowSeries from "./components/Series";

function PostPage() {
  const params = useParams<{ show: string; id: string }>();
  const dispatch = useDispatch() as any;
  const dataShow = useAppSelector((state: any) => state?.fetchShow) as any;

  useEffect(() => {
    dispatch(
      fetchShow({
        id: params.id,
        type: params.show,
      })
    );
  }, [dispatch, params.id, params.show]);

  return (
    <>
      {params.show === "tv" && <ShowSeries dataShow={dataShow} />}
      {params.show === "movie" && <ShowMovies />}
    </>
  );
}

export default PostPage;
