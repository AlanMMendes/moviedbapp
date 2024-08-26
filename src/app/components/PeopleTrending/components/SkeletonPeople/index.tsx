function SkeletonPeople() {
  const mockPeople = [
    {
      id: 1,
      name: "Person 1",
      original_name: "Person 1",
      popularity: 268.53,
    },
    {
      id: 2,
      name: "Person 2",
      original_name: "Person 2",
      popularity: 275.6,
    },
    {
      id: 3,
      name: "Person 3",
      original_name: "Person 3",
      popularity: 282.67,
    },
    {
      id: 4,
      name: "Person 4",
      original_name: "Person 4",
      popularity: 290.74,
    },
    {
      id: 5,
      name: "Person 5",
      original_name: "Person 5",
      popularity: 298.81,
    },
    {
      id: 6,
      name: "Person 6",
      original_name: "Person 6",
      popularity: 306.88,
    },
    {
      id: 7,
      name: "Person 7",
      original_name: "Person 7",
      popularity: 314.95,
    },
    {
      id: 8,
      name: "Person 8",
      original_name: "Person 8",
      popularity: 323.02,
    },
    {
      id: 9,
      name: "Person 9",
      original_name: "Person 9",
      popularity: 331.09,
    },
    {
      id: 10,
      name: "Person 10",
      original_name: "Person 10",
      popularity: 339.16,
    },
    {
      id: 11,
      name: "Person 11",
      original_name: "Person 11",
      popularity: 347.23,
    },
    {
      id: 12,
      name: "Person 12",
      original_name: "Person 12",
      popularity: 355.3,
    },
    {
      id: 13,
      name: "Person 13",
      original_name: "Person 13",
      popularity: 363.37,
    },
    {
      id: 14,
      name: "Person 14",
      original_name: "Person 14",
      popularity: 371.44,
    },
    {
      id: 15,
      name: "Person 15",
      original_name: "Person 15",
      popularity: 379.51,
    },
    {
      id: 16,
      name: "Person 16",
      original_name: "Person 16",
      popularity: 387.58,
    },
    {
      id: 17,
      name: "Person 17",
      original_name: "Person 17",
      popularity: 395.65,
    },
    {
      id: 18,
      name: "Person 18",
      original_name: "Person 18",
      popularity: 403.72,
    },
    {
      id: 19,
      name: "Person 19",
      original_name: "Person 19",
      popularity: 411.79,
    },
    {
      id: 20,
      name: "Person 20",
      original_name: "Person 20",
      popularity: 419.86,
    },
  ];
  return (
    <div className="w-full h-auto flex items-start flex-col ">
      <div className="grid lg:grid-cols-8 min-w-full md:grid-cols-5 grid-cols-2 gap-4 min-h-[32rem] overflow-x-hidden max-h-[44rem] custom-scrollbar overflow-y-scroll">
        {mockPeople?.map((item: any, key: any) => {
          return (
            <div
              key={`${key}-skeleton-people`}
              className="mask min-h-72 h-auto rounded-lg bg-zinc-900 w-auto min-w-32  animate-pulse"
            />
          );
        })}
      </div>
    </div>
  );
}

export default SkeletonPeople;
