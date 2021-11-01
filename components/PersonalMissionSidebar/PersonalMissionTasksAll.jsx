import { useState } from "react";

const PersonalMissionTasksAll = (props) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`matchmaking__card3-type-label matchmaking__card3-type-label-all ${isActive ? 'active' : ''}`} onClick={()=>{setIsActive(isActive=!isActive)}}>
      <div className="matchmaking__card3-type-box">
        <span className="matchmaking__card3-type-checkbox"></span>
        <div className="matchmaking__card3-type-title">All</div>
        <div className="checkbox-info checkbox-info-card3">
          <span>i</span>
          <div className="checkbox-info-text">
            <p>
              {props.info}
            </p>
            <img src="img/matchmaking/info-bg.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="matchmaking__card3-type-price">
        <p>{props.price}$</p>
        <div className="checkbox-benefit">{props.discount}%</div>
      </div>
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

export default PersonalMissionTasksAll;
