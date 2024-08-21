function SkeletonMovie() {
  return (
    <div className="flex items-center justify-start px-2 h-[52rem] bg-gray-200 opacity-20 animate-pulse">
      {/* Div interna */}
      <div className="flex flex-col w-full animate-pulse gap-2">
        <div className="p-4 bg-gray-400 text-white rounded-md w-2/3"></div>
        <div className="p-4 bg-gray-400 text-white rounded-md w-1/3"></div>
        <div className="p-4 bg-gray-400 text-white rounded-md w-80"></div>
      </div>
    </div>
  );
}

export default SkeletonMovie;
