import Nouislider from "nouislider-react";

const RangeSkill = (props) => {
  return (
    <>
      <div className="matchmaking__min-scrollbar-title">Skill</div>
      <Nouislider
        id={`matchmaking__min-scrollbar-skill`}
        range={{ min: 0, max: 100 }}
        start={70}
        step={1}
        pips={{ mode: "range", density: 5 }}
        connect={'lower'}
      />
    </>
  );
};

export default RangeSkill;
