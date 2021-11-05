import Nouislider from "nouislider-react";
import { useEffect } from "react";

const RangeSkill = ({ title, defaultValue, action, minValue=0, maxValue=100, step=1, density=5, startAction=true }) => {
  
  const currentPosition = (current) => {
    if(action){
      action(+current)
    }
  };

  return (
    <>
      <div className="matchmaking__min-scrollbar-title">{title}</div>
      {defaultValue ? (
        <Nouislider
          id={`matchmaking__min-scrollbar-skill`}
          range={{ min: minValue, max: maxValue }}
          start={defaultValue}
          step={step}
          pips={{ mode: "range", density: density }}
          connect={"lower"}
          onUpdate={(e) => currentPosition(e)}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default RangeSkill;
