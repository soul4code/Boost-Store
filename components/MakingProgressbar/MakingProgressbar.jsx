import Nouislider from "nouislider-react";
import { useEffect, useState } from "react";
import MakingProgressbarDesc from "./MakingProgressbarDesc";

const MakingProgressbar = ({
  list,
  startValue,
  endValue,
  maxValue,
  minValue,
  step,
  onChange,
}) => {
  const [ref, setRef] = useState();
  const [value] = useState([startValue, endValue]);

  useEffect(() => {
    console.log(ref);
    if (!ref?.noUiSlider) {
      return;
    }
    const [sliderStartValue, sliderEndValue] = ref.noUiSlider.get(true);
    if (+startValue !== +sliderStartValue || +endValue !== +sliderEndValue) {
      ref.noUiSlider.set([startValue, endValue]);
    }
  }, [startValue, endValue, ref]);

  return (
    <>
      <Nouislider
        id={`matchmaking__progressbar`}
        instanceRef={(instance) => {
          if (instance && !ref) {
            setRef(instance);
          }
        }}
        range={{ min: minValue, max: maxValue }}
        start={value}
        step={1}
        connect
        onUpdate={(e) => {
          onChange(...e);
        }}
      />
      <MakingProgressbarDesc list={list} />
    </>
  );
};

export default MakingProgressbar;
