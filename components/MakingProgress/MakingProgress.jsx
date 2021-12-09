import { useEffect, useMemo, useState } from "react";
import getList from "../../calculator/getList";
import MakingProgressFooter from "../MakingProgressFooter/MakingProgressFooter";
import MakingProgressMain from "../MakingProgressMain/MakingProgressMain";

const MakingProgress = (props) => {
  const [extraOptionsList, setExtraOptionsList] = useState([]);

  const getExtraOptionsList = (priceData, index) => {
    getList(extraOptionsList, index, "data", 40, setExtraOptionsList);
  };

  return (
    <>
      <MakingProgressMain {...props} />
      <MakingProgressFooter
        description={props.DESCRIPTION}
        isExtraOptions={props.IS_EXTRA_OPTIONS}
        extraOptions={props.EXTRA_OPTIONS}
        price={props.order?.price}
        days={props.order?.days}
        currencySign={props.currency?.sign}
        getExtraOptionsList={getExtraOptionsList}
      />
    </>
  );
};

export default MakingProgress;
