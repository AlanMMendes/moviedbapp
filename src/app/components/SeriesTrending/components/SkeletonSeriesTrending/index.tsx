function SkeletonSeries() {
  return (
    <div className="flex flex-row w-full h-auto animate-pulse gap-3">
      <div className="w-full flex flex-row bg-gray-200 opacity-20 h-[21.5rem] rounded-3xl shadow-md" />
      <div className="w-full hidden md:flex lg:flex flex-row bg-gray-200 opacity-20 h-[21.5rem] rounded-3xl shadow-md" />
    </div>
  );
}

export default SkeletonSeries;
