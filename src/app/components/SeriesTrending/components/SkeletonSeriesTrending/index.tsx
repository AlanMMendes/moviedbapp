function SkeletonSeries() {
  return (
    <div className="flex flex-row w-full h-auto animate-pulse gap-5 justify-center md:justify-start lg:justify-start">
      <div className="w-64 flex flex-row bg-gray-200 opacity-20 min-h-44 h-44 rounded-lg shadow-md" />
      <div className="w-64 hidden md:flex lg:flex flex-row bg-gray-200 opacity-20 min-h-44 h-44 rounded-lg shadow-md" />
      <div className="w-64 md:flex lg:flex flex-row bg-gray-200 opacity-20 min-h-44 h-44 rounded-lg shadow-md" />
      <div className="w-64 hidden md:hidden lg:flex flex-row bg-gray-200 opacity-20 min-h-44 h-44 rounded-lg shadow-md" />
      <div className="w-64 hidden md:hidden lg:flex flex-row bg-gray-200 opacity-20 min-h-44 h-44 rounded-lg shadow-md" />
      <div className="w-64 hidden md:hidden lg:flex flex-row bg-gray-200 opacity-20 min-h-44 h-44 rounded-lg shadow-md" />
      <div className="w-64 hidden md:hidden lg:flex flex-row bg-gray-200 opacity-20 min-h-44 h-44 rounded-lg shadow-md" />
      <div className="w-64 hidden md:hidden lg:flex flex-row bg-gray-200 opacity-20 min-h-44 h-44 rounded-lg shadow-md" />
      <div className="w-64 hidden md:hidden lg:flex flex-row bg-gray-200 opacity-20 min-h-44 h-44 rounded-lg shadow-md" />
    </div>
  );
}

export default SkeletonSeries;
