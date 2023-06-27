import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import { useRef } from "react";

const Nav = ({ regions, onToggle, showNav, onChange, onSearch }) => {
  const inputRef = useRef();
  const handleChange = (region) => {
    inputRef.current.value = "";
    onChange(`https://restcountries.com/v3.1/region/${region}`);
  };

  return (
    <nav>
      <div className="my-8 flex flex-col md:flex-row space-y-7 md:space-y-0 md:justify-between">
        <div className="md:w-2/3 relative h-14 rounded shadow-sm">
          <input
            type="text"
            placeholder="Search a country..."
            className="block appearance-none border-none focus:outline-none elements h-full w-full rounded px-10"
            onInput={(e) => onSearch(e.target.value)}
            ref={inputRef}
          />
          <MagnifyingGlassIcon
            width={25}
            className="absolute top-1/2 left-2 transform -translate-y-1/2"
          />
        </div>

        <div className="w-2/3 md:w-1/3 md:flex md:justify-end">
          <div className="relative md:w-2/3">
            <div
              className="flex items-center justify-between h-14 px-4 rounded shadow-sm elements cursor-pointer"
              onClick={onToggle}
            >
              <span>Filter by region</span>
              {showNav ? (
                <ChevronUpIcon width={20} />
              ) : (
                <ChevronDownIcon width={20} />
              )}
            </div>
            {showNav && (
              <>
                <div className="elements rounded shadow-sm z-10 p-4 absolute w-full top-20 left-0">
                  {regions.map((region, index) => (
                    <div
                      key={index}
                      className="py-3 capitalize cursor-pointer hover transform hover:scale-x-95"
                      onClick={() => handleChange(region)}
                    >
                      {region}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
