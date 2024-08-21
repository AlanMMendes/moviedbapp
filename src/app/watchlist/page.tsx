import BackButton from "../components/BackButton";
import WatchList from "../components/WatchList";

function WatchlistPage() {
  return (
    <div className="px-2">
      <BackButton />
      <div className="flex flex-col py-10">
        <WatchList />
      </div>
    </div>
  );
}

export default WatchlistPage;
