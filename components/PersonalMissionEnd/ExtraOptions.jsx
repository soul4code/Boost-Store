import Benefit from "../common/Benefit";
import Checkbox from "../common/Checkbox";
import PinInfo from "../common/PinInfo";

const ExtraOptions = (props) => {
  console.log(props);
  let optionsList;
  if (props.extraOptions) {
    optionsList = props.extraOptions.map((o) => (
      <Checkbox
        children={
          <>
            <PinInfo description={o.INFO} />{" "}
            <Benefit measure="%" num={o.PRICE} />
          </>
        }
        key={o.ID}
        id={o.ID}
        text={o.TITLE}
        action={props.getCheckedOptions}
      />
    ));
  }
  return (
    <div className="matchmaking__card3-extra">
      <div className="subtitle__page">Extra options</div>
      <div className="options-checkbox-wrapper">
        {optionsList}
      </div>
    </div>
  );
};

export default ExtraOptions;
