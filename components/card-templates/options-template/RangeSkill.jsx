import Nouislider from "nouislider-react";

const RangeSkill = ({ title, defaultValue }) => {
  return (
    <>
      <div className="matchmaking__min-scrollbar-title">{title}</div>
      {defaultValue ? (
        <Nouislider
          id={`matchmaking__min-scrollbar-skill`}
          range={{ min: 0, max: 100 }}
          start={defaultValue}
          step={1}
          pips={{ mode: "range", density: 5 }}
          connect={"lower"}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default RangeSkill;
