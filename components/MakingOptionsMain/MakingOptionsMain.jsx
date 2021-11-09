import ExtraOptions from "../ExtraOptions/ExtraOptions";
import InputDarkBlue from "../InputDarkBlue/InputDarkBlue";
import OptionsSelect from "./OptionsSelect";
import OptionsSelectList from "./OptionsSelectList";
import ProgressbarList from "./ProgressbarList";

const MakingOptionsMain = ({
  list,
  isExtraOptions,
  isInput,
  input,
  options,
  progressbar,
  getPriceList,
  getDaysList,
  getSelectPrice
}) => {

  return (
    <div className="matchmaking__options-card2">
      {/* <div className="matchmaking__card2-box">
        <div className="subtitle__page">Boost variants</div>
        <MakingOprionsVariants list={list} />
      </div> */}
      {isInput && <OptionsSelectList input={input} getSelectPrice={getSelectPrice}/>}

      <ProgressbarList
        input={input}
        options={options}
        progressbar={progressbar}
        getPriceList={getPriceList}
        getDaysList={getDaysList}
      />
      {isExtraOptions && (
        <div className="matchmaking__card2-box matchmaking__card2-box-extra">
          <ExtraOptions extraOptions={options} />
        </div>
      )}
    </div>
  );
};

export default MakingOptionsMain;
