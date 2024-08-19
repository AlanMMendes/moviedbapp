function SkeletonMovie() {
  return (
    <div className="w-full px-4 lg:w-2/3 h-full min-h-96 min-w-full rounded-lg shadow-md ">
      {/* Skeleton Header */}
      <div className="animate-pulse opacity-20 flex flex-col h-96 py-2">
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
  );
}

export default SkeletonMovie;
