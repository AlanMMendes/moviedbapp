import { fetchCast } from "@/app/features/fetchCastSlice";
import { useAppSelector } from "@/app/store";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ImageWithTooltipPerson from "../ImageWithTooltipPerson";

function Cast() {
  const params = useParams<{ show: string; id: string }>();
  const dispatch = useDispatch() as any;
  const data = useAppSelector((state: any) => state?.fetchCast) as any;

  useEffect(() => {
    dispatch(
      fetchCast({
        id: params.id,
        type: params.show,
      })
    );
  }, [dispatch, params.id, params.show]);

  return (
    <div className="min-h-[10rem] mb-10">
      {data.status === "succeeded" && (
        <div className="w-full h-auto flex items-start flex-col gap-2">
          {data?.data.cast?.length !== 0 && (
            <>
              <h1 className="text-2xl font-extralight">Cast of the movie:</h1>
              <div className="grid lg:grid-cols-8 min-w-full md:grid-cols-5 grid-cols-2 gap-4 min-h-[5rem] max-h-[44rem] custom-scrollbar overflow-y-scroll overflow-x-hidden">
                {data?.data?.cast?.map((item: any, key: any) => {
                  return (
                    <div
                      key={`${key}-modal-trending-people`}
                      className="w-auto flex flex-col"
                    >
                      <ImageWithTooltipPerson
                        src={`https://image.tmdb.org/t/p/original/${item?.profile_path}`}
                        alt={item?.profile_path || "post-profile_path"}
                        props={{
                          type: "person",
                          id: item?.id,
                          name: item?.name,
                          popularity: item?.popularity,
                          profile_path: item?.profile_path,
                          known_for: item?.known_for,
                        }}
                      />

                      <div className="w-full bottom-0  py-3 flex flex-col justify-start items-start ">
                        <h1 className="max-w-32 max-h-5 overflow-x-hidden overflow-y-auto text-sm">
                          {item?.name}
                        </h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Cast;
