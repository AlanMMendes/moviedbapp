function SkeletonPeople() {
  return (
    <div className="flex flex-row w-full min-h-[36rem] animate-pulse gap-12 justify-start">
      <div className="w-96 flex flex-row bg-gray-200 opacity-20 min-h-44 h-auto rounded-3xl shadow-md" />
      <div className="w-96 md:flex lg:flex flex-row bg-gray-200 opacity-20 h-auto  rounded-3xl  shadow-md" />
    </div>
  );
}

export default SkeletonPeople;
