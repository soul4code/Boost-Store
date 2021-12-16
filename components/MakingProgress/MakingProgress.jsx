import { useCallback, useEffect, useMemo, useState } from "react";
import getList from "../../calculator/getList";
import MakingProgressFooter from "../MakingProgressFooter/MakingProgressFooter";
import MakingProgressMain from "../MakingProgressMain/MakingProgressMain";
import { ID } from "@datorama/akita";

const MakingProgress = (props) => {
  const [usedExtraOptions, setUsedExtraOptions] = useState(
    props.order.options || {}
  );

  const onChangeOptions = useCallback(
    (options) => {
      setUsedExtraOptions(options);
      props.onChangeOptions(options);
    },
    [setUsedExtraOptions]
  );

  useEffect(
    () => setUsedExtraOptions(props.order?.options || {}),
    [props.order?.options]
  );

  return (
    <>
      <MakingProgressMain {...props} />
      <MakingProgressFooter
        description={props.DESCRIPTION}
        isExtraOptions={props.IS_EXTRA_OPTIONS}
        extraOptions={props.EXTRA_OPTIONS}
        usedOptions={usedExtraOptions}
        price={props.order?.price}
        name={props.NAME}
        id={props.ID}
        days={props.order?.days}
        currency={props.currency}
        onChangeOptions={onChangeOptions}
      />
    </>
  );
};

export default MakingProgress;
