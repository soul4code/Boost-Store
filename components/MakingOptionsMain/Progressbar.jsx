import { useEffect, useState } from "react";
import { calcPrice } from "../../calculator/main";
import RangeSkill from "../card-templates/options-template/RangeSkill";
import InputDarkBlue from "../InputDarkBlue/InputDarkBlue";

const Progressbar = (props) => {

  const [localPriceEnd, setLocalPriceEnd] = useState(0);

  console.log(localPriceEnd)

  const calculLocalPriceEnd = (nums) => {
    setLocalPriceEnd(
      calcPrice(
        nums,
        props.dataProgressbar.measure,
        props.dataProgressbar.price,
        props.dataProgressbar.sign
      )
    );
  };

  const [localNums, setLocalNums] = useState(0);
  const getLocalNums = (sum) => {
    setLocalNums(sum);
  };

  const [localDays,setLocalDays]=useState()

  useEffect(() => {
    calculLocalPriceEnd(localNums);
    setLocalDays(props.dataProgressbar.daysInCount*localNums)
  }, [localNums]);

  useEffect(() => {
      props.getPriceList(props.index, localPriceEnd);
  }, [localPriceEnd]);

  


  return (
    <div className={"matchmaking__options-box"}>
      <div className="matchmaking__min-scrollbar-box matchmaking__scrollbar-start">
        <RangeSkill
          title={props.dataProgressbar.title}
          defaultValue={props.dataProgressbar.defaultValue}
          minValue={props.dataProgressbar.minValue}
          maxValue={props.dataProgressbar.maxValue}
          step={props.dataProgressbar.step}
          density={props.dataProgressbar.density}
          action={getLocalNums}
        />
      </div>
      <div className={"matchmaking__options-input"}>
        {props.isInput ? (
          <InputDarkBlue
            defaultValue={props.dataProgressbar.defaultValue}
            action={getLocalNums}
            currentValue={localNums}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Progressbar;
