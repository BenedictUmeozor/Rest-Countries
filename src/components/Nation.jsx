import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Nation = ({ nation }) => {
  const { name, flags, region, capital, population, cca3 } = nation;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={"details/" + cca3}
        className="block w-3/4 mx-auto md:w-full shadow-sm nation hover transform hover:scale-95"
      >
        <div className="overflow-hidden rounded-t">
          <img src={flags.png} alt={flags.alt} />
        </div>
        <div className="elements p-4 rounded-b">
          <h2 className="text-xl md:text-2xl font-bold mb-3">{name.common}</h2>
          <p className="pb-1">
            <span>Population: </span>
            <span className="font-thin">{population}</span>
          </p>
          <p className="pb-1">
            <span>Region: </span>
            <span className="font-thin">{region}</span>
          </p>
          <p className="pb-1">
            <span>Capital: </span>
            <span className="font-thin">{capital}</span>
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default Nation;
