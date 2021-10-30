import Nouislider from "nouislider-react";

const RangeExperience = (props) => {
  return (
    <>
      <div className="matchmaking__min-scrollbar-title">Experience</div>
      <Nouislider
        id={`matchmaking__min-scrollbar-experience`}
        range={{ min: 0, max: 100 }}
        start={40}
        step={1}
        pips={{ mode: "range", density: 5 }}
        connect={'lower'}
      />
    </>
  );
};

export default RangeExperience;
