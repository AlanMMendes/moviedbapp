const Alert = ({ message, priority }: any) => {
  return (
    <div
      className={`fixed top-4 right-4  ${
        priority ? "bg-green-500" : "bg-yellow-500"
      } z-50  text-white p-4 rounded shadow-lg flex items-center`}
    >
      <p className="flex-1">{message}</p>
    </div>
  );
};

export default Alert;
