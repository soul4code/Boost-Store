import { useEffect, useState } from "react";
import MakingProgressFooter from "../MakingProgressFooter/MakingProgressFooter";
import MakingProgressMain from "../MakingProgressMain/MakingProgressMain";

const MakingProgress = (props) => {
  const [basePrice, setBasePrice] = useState();

  const getBasePrice = (e) => {
    let currentFirst = +e[0];
    let currentSecond = +e[1];
    let price = (props.PRICE);
    setBasePrice(
      (Math.round(currentSecond / 100) - Math.round(currentFirst / 100)) * price
    );
  };

  return (
    <>
      <MakingProgressMain {...props} getBasePrice={getBasePrice} />
      <MakingProgressFooter
        description={props.DESCRIPTION}
        isExtraOptions={props.IS_EXTRA_OPTIONS}
        extraOptions={props.EXTRA_OPTIONS}
        price={basePrice}
      />
    </>
  );
};

export default MakingProgress;
