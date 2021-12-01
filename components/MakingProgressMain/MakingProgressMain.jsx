import Nouislider from "nouislider-react";
import ArrRightLargeFat from "../icons/ArrRightLargeFat";
import SelectDarkBlue from "../common/SelectDarkBlue/SelectDarkBlue";
import SelectedRank from "../SelectedRank/SelectedRank";
import Image from "next/image";
import MakingProgressbar from "../MakingProgressbar/MakingProgressbar";
import MakingArrs from "./MakingArrs";
import { useEffect, useState } from "react";

const MakingProgressMain = (props) => {
  console.log(props);

  // const [currentFirst, setCurrentFirst] = useState(props.DEFAULT_VALUE_FIRS);
  // const [currentSecond, setCurrentSecond] = useState(props.DEFAULT_VALUE_SECOND);

  // const currentTracking = (e) => {
  //   setCurrentFirst(+e[0]);
  //   setCurrentSecond(+e[1]);
  //   console.log(e)
  // };

  // const [basePrice, setBasePrice] = useState()

  // useEffect(() => {
  //   setBasePrice(
  //     (Math.round(currentSecond / 100)-Math.round(currentFirst / 100))*props.PRICE
  //   )
  // }, [currentFirst, currentSecond]);

  const [indexCurrentSelect, setIndexCurrentSelect] = useState(0);
  const [indexDesiredSelect, setIndexDesiredSelect] = useState(0);

  const getCurrentSelect = (index) => {
    setIndexCurrentSelect(index);
    console.log(index);
  };

  const getDesiredSelect = (index) => {
    setIndexDesiredSelect(index);
  };

  const [price, setPrice] = useState(0);

  useEffect(() => {
    let price = (indexDesiredSelect - indexCurrentSelect) * +props.PRICE;

    if (price < 0) {
      price = 0;
    }
    setPrice(price);
    props.getBasePriceSelect(price);
  }, [indexCurrentSelect, indexDesiredSelect]);

  return (
    <div className="matchmaking__progress">
      <div className="matchmaking__progress-block">
        <SelectedRank
          positionList={props.POSITION_LIST}
          title={"Сurrent rank"}
          action={getCurrentSelect}
        />

        <MakingArrs />

        <SelectedRank
          positionList={props.POSITION_LIST}
          title={"Desired rank"}
          isReverse={true}
          action={getDesiredSelect}
        />
      </div>
      <MakingProgressbar
        list={props.POSITION_LIST}
        minStartValue={props.DEFAULT_VALUE_FIRST}
        maxStartValue={props.DEFAULT_VALUE_SECOND}
        density={props.DENSITY}
        step={props.STEP}
        price={props.PRICE}
        action={props.getBasePrice}
      />
    </div>
  );
};

export default MakingProgressMain;
