import { MoonIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  return (
    <>
      <header className="elements shadow py-7">
        <div className="center">
          <div className="flex items-center justify-between">
            <Link to="/">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
                Where in the world?
              </h1>
            </Link>
            <button
              className="flex space-x-1 hover transform hover:scale-95"
              onClick={toggleTheme}
            >
              <MoonIcon className="text" width={20} />
              <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="center">
          <Outlet />
        </div>
      </main>
      <footer className="p-5">
        <div className="mt-5 text-center">
          &copy; Benedict 2023
        </div>
      </footer>
    </>
  );
};

export default RootLayout;
