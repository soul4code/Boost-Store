import SelectedRank from "../SelectedRank/SelectedRank";
import MakingProgressbar from "../MakingProgressbar/MakingProgressbar";
import MakingArrs from "./MakingArrs";
import { useCallback, useEffect, useState } from "react";

const MakingProgressMain = (props) => {
  const [startValue, setStartValue] = useState(props.DEFAULT_VALUE_FIRST);
  const [endValue, setEndValue] = useState(props.DEFAULT_VALUE_SECOND);

  const onChangeByProgressBar = useCallback(
    (start, end) => {
      console.log("onChangeByProgressBar");
      setStartValue(start);
      setEndValue(end);
    },
    [setStartValue, setEndValue]
  );

  useEffect(() => {
    props.getBasePrice([startValue, endValue]);
  }, [startValue, endValue, props.getBasePrice]);

  console.log(endValue);

  return (
    <div className="matchmaking__progress">
      <div className="matchmaking__progress-block">
        <SelectedRank
          positionList={props.POSITION_LIST}
          value={startValue}
          title={"Сurrent rank"}
          onChange={setStartValue}
        />

        <MakingArrs />

        <SelectedRank
          positionList={props.POSITION_LIST}
          value={endValue}
          title={"Desired rank"}
          isReverse={true}
          onChange={(val) => {
            console.log(val);
            setEndValue(val);
          }}
        />
      </div>
      <MakingProgressbar
        list={props.POSITION_LIST}
        startValue={startValue}
        endValue={endValue}
        maxValue={props.MAX_VALUE}
        minValue={props.MIN_VALUE}
        step={props.STEP}
        price={props.PRICE}
        onChange={onChangeByProgressBar}
      />
    </div>
  );
};

export default MakingProgressMain;
