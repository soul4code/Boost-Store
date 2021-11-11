import Nouislider from "nouislider-react";

const Range = ({
  title,
  defaultValue,
  action,
  minValue = 0,
  maxValue = 100,
  step = 1,
  density = 5,
}) => {
  const currentPosition = (current) => {
    if (action) {
      action(+current);
    }
  };

  if (defaultValue < minValue) {
    defaultValue === minValue;
  } else if (defaultValue > maxValue) {
    defaultValue === maxValue;
  }

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
          onSlide={(e) => {
            currentPosition(e);
          }}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Range;
