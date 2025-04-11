const Toast = ({ show, message = "Copied to Clipboard!" }) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-white text-black text-sm rounded-lg shadow-lg animate-fade-in-out px-4 py-2">
      <p className="text-center">{message}</p>
    </div>
  );
};

export default Toast;
