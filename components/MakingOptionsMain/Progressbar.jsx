import { useEffect, useState } from "react";
import { calcDays, calcPrice } from "../../calculator/main";
import Range from "../common/Range";
import InputDarkBlue from "../InputDarkBlue/InputDarkBlue";

const Progressbar = (props) => {
  // Price
  const [localPriceEnd, setLocalPriceEnd] = useState(0);

  const calculLocalPriceEnd = (nums) => {
    setLocalPriceEnd(
      calcPrice(
        nums,
        props.DATA_PROGRESSBAR.MEASURE,
        props.DATA_PROGRESSBAR.PRICE,
        props.DATA_PROGRESSBAR.SIGN
      )
    );
  };

  const [localNums, setLocalNums] = useState(0);
  const getLocalNums = (sum) => {
    if (sum <= props.DATA_PROGRESSBAR.MIN_VALUE) {
      setLocalNums(props.DATA_PROGRESSBAR.MIN_VALUE);
    } else if (sum >= props.DATA_PROGRESSBAR.MAX_VALUE) {
      setLocalNums(props.DATA_PROGRESSBAR.MAX_VALUE);
    } else {
      setLocalNums(sum);
    }
    
  };

  // Days
  const [localDaysEnd, setLocalDaysEnd] = useState(0);

  const calculLocalDaysEnd = (nums) => {
    setLocalDaysEnd(
      calcDays(
        nums,
        props.DATA_PROGRESSBAR.DAYS_IN_COUNT,
        props.DATA_PROGRESSBAR.SIGN
      )
    );
  };

  useEffect(() => {
    calculLocalPriceEnd(localNums);
    calculLocalDaysEnd(localNums);
  }, [localNums]);

  useEffect(() => {
    props.getPriceList(props.index, localPriceEnd);
    props.getDaysList(props.index, localDaysEnd);
  }, [localPriceEnd]);

  return (
    <div className={"matchmaking__options-box"}>
      <div className="matchmaking__min-scrollbar-box matchmaking__scrollbar-start">
        <Range
          title={props.DATA_PROGRESSBAR.TITLE}
          defaultValue={localNums}
          minValue={props.DATA_PROGRESSBAR.MIN_VALUE}
          maxValue={props.DATA_PROGRESSBAR.MAX_VALUE}
          step={props.DATA_PROGRESSBAR.STEP}
          density={props.DATA_PROGRESSBAR.DENSITY}
          action={getLocalNums}
        />
      </div>
      <div className={"matchmaking__options-input"}>
        {props.IS_INPUT ? (
          <InputDarkBlue
            defaultValue={props.DATA_PROGRESSBAR.DEFAULT_VALUE}
            action={getLocalNums}
            currentValue={localNums}
            type={Number}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Progressbar;
