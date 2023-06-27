import Nation from "./Nation";

const Nations = ({ nations }) => {
  return (
    <div className="my-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {nations.map((nation, index) => (
        <Nation key={index} nation={nation} />      
      ))}
    </div>
  );
};

export default Nations;
