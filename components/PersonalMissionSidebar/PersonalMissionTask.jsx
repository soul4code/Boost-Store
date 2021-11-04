import { useEffect, useState } from "react";

const PersonalMissionTask = (props) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(()=>{
    
  })
  return (
    <div
      className={`matchmaking__card3-type-label ${isActive ? "active" : ""} `}
      onClick={() => {
        props.getSelectTasks(props.title);
        setIsActive((isActive = !isActive));
      }}
    >
      <div className="matchmaking__card3-type-box">
        <span className="matchmaking__card3-type-checkbox"></span>
        <div className="matchmaking__card3-type-title">{props.title}</div>
        <div className="checkbox-info checkbox-info-card3">
          <span>i</span>
          <div className="checkbox-info-text">
            <p>{props.info}</p>
            <img src="img/matchmaking/info-bg.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="matchmaking__card3-type-price">{props.price}$</div>
      <div className="matchmaking__card3-type-box">
        <span className="matchmaking__card3-type-checkbox-min"></span>
        <div className="matchmaking__card3-type-text">
          With honors
          <span>1$</span>
        </div>
      </div>
    </div>
  );
};

export default PersonalMissionTask;
