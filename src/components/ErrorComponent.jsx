const ErrorComponent = ({ message }) => {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold text-center italic">{message}</h3>
    </div>
  );
};

export default ErrorComponent;
