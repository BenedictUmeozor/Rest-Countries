import Nation from "./Nation";
import PropTypes from "prop-types";

const Nations = ({ nations }) => {
  return (
    <div className="my-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-4">
      {nations.map((nation, index) => (
        <Nation key={index} nation={nation} />
      ))}
    </div>
  );
};

Nations.propTypes = {
  nations: PropTypes.array.isRequired,
};

export default Nations;
