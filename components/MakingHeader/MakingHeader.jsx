import Advantages from "../common/Advantages/Advantages";

const MakingHeader = (props) => {
  return (
    <div className="matchmaking__top-box">
      {props.title 
      ? <div className="matchmaking__title">
        <h2>{props.title}</h2>
      </div>
      :<div className="matchmaking__title"><h2>Заголовка по нет</h2></div>
      }
      
      <Advantages advantages={props.advantages} />
    </div>
  );
};

export default MakingHeader;
