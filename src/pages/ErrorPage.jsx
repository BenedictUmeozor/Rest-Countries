import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center mt-12">
      <h1 className="text-3xl font-bold">Uh oh! We have a problem</h1>
      <p className="mt-8">Go to <Link className="underline" to="/">Homepage</Link></p>
    </div>
  );
};

export default ErrorPage;
