import Advantages from "../Advantages/Advantages";

const MakingHeader = (props) => {
  return (
    <div className="matchmaking__top-box">
      <div className="matchmaking__title">
        <h2>{props.title}</h2>
      </div>
      <Advantages advantages={props.advantages} />
    </div>
  );
};

export default MakingHeader;
