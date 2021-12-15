import Nouislider from "nouislider-react";
import React, { useImperativeHandle, useState } from "react";

interface MakingProgressbarProps {
  list: { TEXT: string; ID: string }[];
  startValue: number;
  endValue: number;
  maxValue: number;
  minValue: number;
  onChange: (start: number, end: number) => void;
}

const MakingProgressbar: React.FC<MakingProgressbarProps> = React.forwardRef(
  ({ list, startValue, endValue, maxValue, minValue, onChange }, inRef) => {
    const [value] = useState([startValue, endValue]);

    const [ref, setRef] = useState<{ noUiSlider: any }>();

    useImperativeHandle(
      inRef,
      () => ({
        set: (params: { start: number; end: number }) => {
          if (params.start !== undefined) {
            ref?.noUiSlider?.setHandle(0, params.start, false);
          } else if (params.end !== undefined) {
            ref?.noUiSlider?.setHandle(1, params.end, false);
          }
        },
      }),
      [ref]
    );

    return (
      <>
        <Nouislider
          id={`matchmaking__progressbar`}
          instanceRef={(instance) => {
            if (instance && !ref) {
              setRef(instance as unknown as { noUiSlider: any });
            }
          }}
          range={{ min: minValue, max: maxValue }}
          start={value}
          step={1}
          connect
          pips={{
            mode: "count",
            values: 10,
            density: 10,
          }}
          onUpdate={(e: string[]) => onChange(+e[0], +e[1])}
        />
      </>
    );
  }
);

export default MakingProgressbar;
