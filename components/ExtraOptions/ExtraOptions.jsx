import Benefit from "../common/Benefit";
import Checkbox from "../common/Checkbox";
import PinInfo from "../common/PinInfo";

const ExtraOptions = (props) => {

  let optionsList;
  if (props.extraOptions) {
    optionsList = props.extraOptions.map((o, index) => (
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
        action={props.getCheckedOptions}
      />
    ));
  }
  return (
    <>
      <div className="subtitle__page">Extra options</div>
      <div className="options-checkbox-wrapper">
        {optionsList}
      </div>
</>
  );
};

export default ExtraOptions;