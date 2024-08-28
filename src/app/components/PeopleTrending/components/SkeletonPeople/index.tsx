import Loading from "@/app/components/Loading";

function SkeletonPeople() {
  return (
    <div className="w-full h-auto flex items-start flex-col ">
      <Loading />
    </div>
  );
}

export default SkeletonPeople;
