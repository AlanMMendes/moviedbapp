function SkeletonPeople() {
  return (
    <div className="flex flex-row w-full min-h-64 animate-pulse h-auto gap-5 justify-start md:justify-start lg:justify-start">
      <div className="w-64 flex flex-row bg-gray-200 opacity-20 min-h-44 h-44 rounded-lg shadow-md" />
      <div className="w-64  md:flex lg:flex flex-row bg-gray-200 opacity-20 min-h-44 h-44 rounded-lg shadow-md" />
      <div className="w-64 hidden md:flex lg:flex flex-row bg-gray-200 opacity-20 min-h-44 h-44 rounded-lg shadow-md" />
      <div className="w-64 hidden md:hidden lg:flex flex-row bg-gray-200 opacity-20 min-h-44 h-44 rounded-lg shadow-md" />
    </div>
  );
}

export default SkeletonPeople;
