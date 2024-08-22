function SkeletonSeries() {
  return (
    <div className="flex h-96 w-full flex-row gap-2 py-2 ">
      <div className="flex justify-center rounded-3xl items-center w-full h-full animate-pulse bg-gray-200 opacity-5" />
      <div className="lg:flex hidden md:flex justify-center rounded-3xl items-center h-full w-full animate-pulse bg-gray-200 opacity-5" />
    </div>
  );
}

export default SkeletonSeries;
