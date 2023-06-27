import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="text-center mt-12">
      <h1 className="text-3xl font-bold">Uh oh! We have a problem</h1>
      {<p className="mt-5">{error.message}</p> || <p className="mt-5">{error.statusText}</p>} 
    </div>
  );
};

export default ErrorPage;
