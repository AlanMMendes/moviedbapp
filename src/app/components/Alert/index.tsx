// src/components/Alert.js
import { clearAlert } from "@/app/features/alertSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Alert = () => {
  const dispatch = useDispatch();
  const { message, type } = useSelector((state: any) => state.alert);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        dispatch(clearAlert());
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  if (!message) return null;

  let alertStyles = "p-4 mb-4 text-sm rounded-lg fixed right-0 z-50 mt-10 mr-1";
  switch (type) {
    case "success":
      alertStyles += " text-green-700 bg-green-100";
      break;
    case "error":
      alertStyles += " text-red-700 bg-red-100";
      break;
    case "info":
      alertStyles += " text-blue-700 bg-blue-100";
      break;
    case "warning":
      alertStyles += " text-yellow-700 bg-yellow-100";
      break;
    default:
      alertStyles += " text-gray-700 bg-gray-100";
      break;
  }

  return (
    <div className={alertStyles} role="alert">
      <span>{message}</span>
    </div>
  );
};

export default Alert;
