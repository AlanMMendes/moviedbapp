import ImageWithTooltipPerson from "@/app/components/ImageWithTooltipPerson";
import Loading from "@/app/components/Loading";
import {
  fetchPersonCreditsMovies,
  fetchPersonCreditsSeries,
} from "@/app/features/fetchPersonCredits";
import { useAppSelector } from "@/app/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WorksDone from "./components/WorksDone";

function ShowPerson() {
  const dispatch = useDispatch() as any;
  const dataPerson = useAppSelector((state: any) => state?.fetchShow) as any;
  const { series, movies } = useSelector(
    (state: any) => state?.fetchPersonCredits
  );

  useEffect(() => {
    if (!dataPerson) return;
    dispatch(
      fetchPersonCreditsSeries({
        person_id: dataPerson?.data?.id,
      })
    );
    dispatch(
      fetchPersonCreditsMovies({
        person_id: dataPerson?.data?.id,
      })
    );
  }, [dispatch, dataPerson]);

  return (
    <div className="h-full w-full ">
      {dataPerson?.status === "succeeded" ? (
        <>
          <div className="flex lg:flex-row flex-col gap-2 mt-12 px-2 w-full justify-center items-center">
            <div className="w-1/3">
              <ImageWithTooltipPerson
                src={`https://image.tmdb.org/t/p/original/${dataPerson?.data?.profile_path}`}
                alt={dataPerson?.profile_path || "post-profile_path"}
                props={{
                  type: "person",
                  active: false,
                  id: dataPerson?.data?.id,
                  name: dataPerson?.data?.name,
                  popularity: dataPerson?.data?.popularity,
                  profile_path: dataPerson?.data?.profile_path,
                  known_for: dataPerson?.data?.known_for,
                }}
              />
            </div>
            <div className="w-full flex gap-2 flex-col">
              <h1 className="font-extralight text-2xl">
                {dataPerson?.data?.name}
              </h1>
              <p className="h-auto max-h-96 w-full overflow-auto custom-scrollbar font-light text-gray-200">
                {dataPerson?.data?.biography}
              </p>

              <h1>Birthday: {dataPerson?.data?.birthday}</h1>
              <h1>Place of Birth: {dataPerson?.data?.place_of_birth}</h1>
              {dataPerson?.data?.deathday === null ? (
                <h1>Status: Alive</h1>
              ) : (
                <h1>Status: Deathday - {dataPerson?.data?.deathday}</h1>
              )}
            </div>
          </div>
          <div className="px-2 py-2">
            {series?.cast?.length !== 0 && (
              <WorksDone
                data={series?.cast}
                title={"Popular Series Done"}
                type={"tv"}
              />
            )}
            {movies?.cast?.length !== 0 && (
              <WorksDone
                data={movies?.cast}
                title={"Popular Movies Done"}
                type={"movie"}
              />
            )}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ShowPerson;
