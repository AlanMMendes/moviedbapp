function SkeletonSeries() {
  return (
    <>
      <span className="text-2xl">Series Trending</span>
      <div
        role="status"
        className="flex justify-center rounded-3xl items-center h-[28rem] animate-pulse bg-gray-200 opacity-5"
      />
    </>
  );
}

export default SkeletonSeries;
