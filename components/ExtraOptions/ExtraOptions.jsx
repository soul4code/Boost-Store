import Benefit from "../common/Benefit";
import Checkbox from "../common/Checkbox";
import PinInfo from "../common/PinInfo";
import { useCallback, useMemo } from "react";

const ExtraOptions = (props) => {
  const onChangeOption = useCallback(
    (data) => {
      if (data.checked) {
        props.onChangeOptions({ ...props.usedOptions, [data.id]: data });
      } else {
        const newOptions = { ...props.usedOptions };
        delete newOptions[data.id];
        props.onChangeOptions(newOptions);
      }
    },
    [props.onChangeOptions, props.usedOptions]
  );

  const optionsList = useMemo(
    () =>
      props.extraOptions.map((o, index) => {
        return (
          <Checkbox
            children={
              <>
                <PinInfo description={o.INFO} />
                <Benefit sign={o.SIGN} measure={o.MEASURE} price={o.PRICE} />
              </>
            }
            key={o.ID}
            index={index}
            id={o.ID}
            text={o.TITLE}
            description={o.INFO}
            sign={o.SIGN}
            measure={o.MEASURE}
            price={o.PRICE}
            checked={Object.keys(props.usedOptions).includes(o.ID.toString())}
            action={onChangeOption}
          />
        );
      }),
    [onChangeOption, props.extraOptions, props.usedOptions]
  );

  return (
    <>
      <div className="subtitle__page">Extra options</div>
      <div className="options-checkbox-wrapper">{optionsList}</div>
    </>
  );
};

export default ExtraOptions;
