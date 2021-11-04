import RangeSkill from "../card-templates/options-template/RangeSkill";
import InputDarkBlue from "../InputDarkBlue/InputDarkBlue";

const Progressbar = ({title, isInput, defaultValue}) => {
    console.log(isInput)
  return (
    <div className={"matchmaking__options-box"}>
      <div className="matchmaking__min-scrollbar-box matchmaking__scrollbar-start">
        <RangeSkill title={title} defaultValue={defaultValue}/>
      </div>
      <div className={"matchmaking__options-input"}>
        {isInput ? <InputDarkBlue defaultValue={defaultValue}/> : ""}
      </div>
    </div>
  );
};

export default Progressbar;
