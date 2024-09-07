import Navbar from "../components/Navbar";
import WatchList from "../components/WatchList";

function WatchlistPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col px-2 ">
        <WatchList />
      </div>
    </>
  );
}

export default WatchlistPage;
