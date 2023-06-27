import { useState } from "react";
import Nav from "../components/Nav";
import { fetchData } from "../helpers";
import { useLoaderData } from "react-router-dom";
import Nations from "../components/Nations";
import ErrorComponent from "../components/ErrorComponent";

export const HomeLoader = async () => {
  const data = await fetchData(`https://restcountries.com/v3.1/all`);
  return data;
};

const Home = () => {
  const [nations, setNations] = useState(useLoaderData());

  const regions = ["africa", "americas", "asia", "europe", "oceania"];
  const [showNav, setShowNav] = useState(false);
  const [noMatch, setNoMatch] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const getNewData = async (url) => {
    const data = await fetchData(url);
    setNations(data);
    setShowNav(!showNav);
  };

  const searchData = async (name) => {
    let data;
    setNoMatch(false);
    if (name === "") {
      data = await fetchData(`https://restcountries.com/v3.1/all`);
    } else {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      if (!res.ok) {
        setNoMatch(true);
        throw new Error("Could not find any match");
      }
      data = await res.json();
    }
    setNations(data);
  };

  return (
    <div>
      <Nav
        regions={regions}
        onToggle={toggleNav}
        showNav={showNav}
        onChange={getNewData}
        onSearch={searchData}
      />
      {noMatch === false && nations && <Nations nations={nations} />}
      {noMatch && <ErrorComponent message={"Could not find any match"} />}
    </div>
  );
};

export default Home;
