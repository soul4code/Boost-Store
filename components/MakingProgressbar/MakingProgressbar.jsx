import Nouislider from "nouislider-react";
import { useEffect, useState } from "react";
import MakingProgressbarDesc from "./MakingProgressbarDesc";

const MakingProgressbar = ({
  list,
  minStartValue,
  maxStartValue,
  density,
  price,
  action,
}) => {
  const [maxRange, setMaxRange] = useState(100);

  useEffect(() => {
    setMaxRange(list.length * density);
  }, [list, density]);


  const [currentFirst, setCurrentFirst] = useState(minStartValue);
  const [currentSecond, setCurrentSecond] = useState(maxStartValue);

  // const currentTracking = (e) => {
  //   setCurrentFirst(+e[0]);
  //   setCurrentSecond(+e[1]);
  // };

  // const [basePrice, setBasePrice] = useState()

  // useEffect(() => {
  //   setBasePrice(
  //     (Math.round(currentSecond / 100)-Math.round(currentFirst / 100))*price
  //   )
  // }, [currentFirst, currentSecond]);

  return (
    <>
      <Nouislider
        id={`matchmaking__progressbar`}
        range={{ min: 0, max: maxRange }}
        start={[minStartValue, maxStartValue]}
        connect
        onUpdate={(e) => {
          action(e);
        }}
      />
      <MakingProgressbarDesc list={list} />
    </>
  );
};

export default MakingProgressbar;
