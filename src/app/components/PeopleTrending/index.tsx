"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../globals.css";
import ImageWithTooltipPerson from "../ImageWithTooltipPerson";

export default function PeopleTrending({ data }: any) {
  return (
    <div className="w-full h-auto">
      {data.status === "succeeded" && (
        <>
          <div className="order-first py-2">
            <h1 className="text-2xl font-extralight">People Trending</h1>
          </div>

          <div className="grid lg:grid-cols-8 min-w-full min-h-[45rem] md:grid-cols-5 grid-cols-2 gap-4">
            {data?.data?.results?.map((item: any, key: any) => {
              return (
                <div
                  key={`${key}-modal-trending-people`}
                  className="w-auto flex flex-col "
                >
                  <ImageWithTooltipPerson
                    src={`https://image.tmdb.org/t/p/original/${item?.profile_path}`}
                    alt={item?.profile_path || "post-profile_path"}
                    props={{
                      type: "person",
                      active: true,
                      id: item?.id,
                      name: item?.name,
                      popularity: item?.popularity,
                      profile_path: item?.profile_path,
                      known_for: item?.known_for,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
