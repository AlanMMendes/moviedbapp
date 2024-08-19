function SkeletonModalSeries() {
  return (
    <div className="flex flex-col w-full animate-pulse h-[40rem] gap-5 justify-start md:justify-start lg:justify-center">
      <div className="w-full px-4 lg:w-1/3 h-full  rounded-lg shadow-md ">
        {/* Skeleton Header */}
        <div className="animate-pulse opacity-20 flex flex-col h-56 py-2">
          <div className="bg-gray-200 h-full rounded-md"></div>
        </div>

        {/* Skeleton Content */}
        <div className="space-y-2 opacity-20 flex flex-col  ">
          <div className="bg-gray-200 h-6 rounded-md"></div>
          <div className="bg-gray-200 h-4 w-1/4 rounded-md"></div>
          <div className="bg-gray-200 h-4 w-1/2 rounded-md"></div>
        </div>

        {/* Skeleton Footer */}
      </div>
      <div className="flex flex-row gap-5 py-5">
        <div className="w-64 flex flex-row bg-gray-200 opacity-20 min-h-44 h-44 rounded-lg shadow-md" />
        <div className="w-64  md:flex lg:flex flex-row bg-gray-200 opacity-20 min-h-44 h-44 rounded-lg shadow-md" />
        <div className="w-64 hidden md:flex lg:flex flex-row bg-gray-200 opacity-20 min-h-44 h-44 rounded-lg shadow-md" />
        <div className="w-64 hidden md:hidden lg:flex flex-row bg-gray-200 opacity-20 min-h-44 h-44 rounded-lg shadow-md" />
      </div>
    </div>
  );
}

export default SkeletonModalSeries;
