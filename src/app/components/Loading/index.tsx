const Loading = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen bg-zinc-900 text-white">
      <div className="text-xl font-semibold mt-4">
        <div
          className="w-10 h-10 rounded-full animate-spin
                    border border-solid border-yellow-500 border-t-transparent mx-auto"
        />
      </div>
    </div>
  );
};

export default Loading;
