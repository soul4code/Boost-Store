import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Benefit from "../common/Benefit";
import PersonalMissionTaskAdd from "./PersonalMissionTaskAdd";

const PersonalMissionTask = ({
  id,
  index,
  title,
  info,
  price,
  addClass,
  addService,
  discount,
  getTasksArray,
}) => {
  const [isActive, setIsActive] = useState(false);

  const [isActiveAdd, setIsActiveAdd] = useState(false);

  const getIsActiveAdd = (e) => {
    e.stopPropagation();
    if(!isActive){
      setIsActive(true)
      setIsActiveAdd(true);
    } else{
      setIsActiveAdd(!isActiveAdd);
    }
  };

  useEffect(() => {
    if (!isActive) {
      setIsActiveAdd(false);
    } else if (isActiveAdd) {
      setIsActive(true);
    }
  }, [isActive, isActiveAdd]);

  return (
    <div
      className={`matchmaking__card3-type-label ${isActive ? "active" : ""} ${addClass && addClass}`}
    >
      <div className="matchmaking__card3-type-box" onClick={(e) => {
        setIsActive((isActive = !isActive));
        debugger
        let data = {id, index, title, price, discount}
        getTasksArray(index, data)
      }}>
        <span className="matchmaking__card3-type-checkbox"></span>
        <div className="matchmaking__card3-type-title">{title}</div>
        <div className="checkbox-info checkbox-info-card3">
          <span>i</span>
          <div className="checkbox-info-text">
            <p>{info}</p>
            <img src="img/matchmaking/info-bg.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="matchmaking__card3-type-price">
        <p>{price}$</p>
        {title==='All' &&
          <Benefit price={discount} measure={'%'}/>
        }
        
      </div>
      <PersonalMissionTaskAdd isActive={isActiveAdd} action={getIsActiveAdd} />
    </div>
  );
};

export default PersonalMissionTask;
