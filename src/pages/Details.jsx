import { assignCurr, fetchData, outputLanguages } from "../helpers";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export const detailsLoader = async ({ params }) => {
  const { cca } = params;
  const nation = await fetchData(`https://restcountries.com/v3.1/alpha/${cca}`);

  return { nation };
};

const Details = () => {
  const { nation } = useLoaderData();

  const navigator = useNavigate();

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    unMember,
    languages,
    currencies,
    borders,
  } = nation[0];

  const language = outputLanguages(languages);
  const currency = assignCurr(currencies);


  return (
    <div className="my-8">
      <div>
        <button className="flex py-1 px-3 elements rounded shadow space-x-1 hover transform hover:scale-95" onClick={() => navigator(-1)}>
          <ArrowLeftIcon width={20} />
          <span>Back</span>
        </button>
      </div>
      <div className="mt-10 flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-4 lg:space-x-8 md:items-center px-5 sm:px-8 md:px-4 lg:px-3">
        <div className="rounded overflow-hidden md:w-1/2 h-64 md:h-72">
          <img src={flags.png} alt={flags.alt} />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{name.common}</h2>

          <div className="flex flex-col md:flex-row md:justify-between mb-6">
            <div className="mb-5 md:mb-0">
              <p className="my-1">
                <span>Official Name: </span>
                <span className="font-thin">{name.official}</span>
              </p>
              <p className="my-1">
                <span>Population: </span>
                <span className="font-thin">{population}</span>
              </p>
              <p className="my-1">
                <span>Region: </span>
                <span className="font-thin">{region}</span>
              </p>
              <p className="my-1">
                <span>Sub Region: </span>
                <span className="font-thin">{subregion}</span>
              </p>
              <p className="my-1">
                <span>Capital: </span>
                <span className="font-thin">{capital}</span>
              </p>
            </div>
            <div>
              <p className="my-1">
                <span>UN member: </span>
                <span className="font-thin">{unMember ? "Yes" : "No"}</span>
              </p>
              <p className="my-1">
                <span>Currency: </span>
                <span className="font-thin">{currency}</span>
              </p>
              <p className="my-1">
                <span>Languages: </span>
                <span className="font-thin">{language}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-center md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-2">
            <p className="md:w-1/3 text-lg font-bold md:self-start">Border Countries:</p>
            {
                borders?.length > 0 ? (<div className="flex items-center justify-between flex-wrap space-y-3 space-x-1 w-full md:w-2/3">
                    {borders.map((border, index) => (
                      <Link key={index} to={`/details/${border}`} className="py-1 px-2 rounded shadow elements hover transform hover:scale-95 text-sm">
                        {border}
                      </Link>
                    ))}
                  </div>) : (<p>No Border Countries</p>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
