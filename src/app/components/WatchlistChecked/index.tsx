import { showAlert } from "@/app/features/alertSlice";
import { removeItem, setData } from "@/app/features/watchListSlice";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Tooltip from "../Tooltip";

function WatchlistChecked({ props }: any) {
  const dispatch: any = useDispatch();
  const items = useSelector((state: any) => state?.watchList?.items);

  const handleAddItem = (item: any) => {
    dispatch(setData(item));
    dispatch(
      showAlert({
        message: `Added ${props.name || props.original_title} to the watchlist`,
        type: "success",
      })
    );
  };

  const handleRemoveItem = (item: any) => {
    dispatch(removeItem(item));
    dispatch(
      showAlert({
        message: `Removed ${
          props.name || props.original_title
        } from the watchlist`,
        type: "warning",
      })
    );
  };

  const idToCheck = props?.id;
  const exists = items?.some((item: any) => item.id === idToCheck);

  return (
    <>
      <button className={`rounded-md transition-colors duration-300`}>
        {exists ? (
          <Tooltip tooltipText={"Remove from Watchlist"}>
            <FaBookmark
              onClick={() => handleRemoveItem(props?.id)}
              className="text-yellow-400 h-6 w-6"
            />
          </Tooltip>
        ) : (
          <Tooltip tooltipText={"Add to Watchlist"}>
            <FaRegBookmark
              onClick={() => {
                handleAddItem(props);
              }}
              className="hover:text-yellow-400 h-6 w-6"
            />
          </Tooltip>
        )}
      </button>
    </>
  );
}

export default WatchlistChecked;
