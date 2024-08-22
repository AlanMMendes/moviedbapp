// Alert.jsx

const Alert = ({ message, onClose }: any) => {
  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg flex items-center">
      <p className="flex-1">{message}</p>
    </div>
  );
};

export default Alert;
