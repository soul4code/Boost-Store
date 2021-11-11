import ExtraOptions from "../ExtraOptions/ExtraOptions";
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
  getSelectPriceList,
  getExtraOptionsList
}) => {

  return (
    <div className="matchmaking__options-card2">
      {/* <div className="matchmaking__card2-box">
        <div className="subtitle__page">Boost variants</div>
        <MakingOprionsVariants list={list} />
      </div> */}
      {isInput && <OptionsSelectList input={input} getSelectPriceList={getSelectPriceList}/>}

      <ProgressbarList
        input={input}
        options={options}
        progressbar={progressbar}
        getPriceList={getPriceList}
        getDaysList={getDaysList}
      />
      {isExtraOptions && (
        <div className="matchmaking__card2-box matchmaking__card2-box-extra">
          <ExtraOptions extraOptions={options} getCheckedOptions={getExtraOptionsList}/>
        </div>
      )}
    </div>
  );
};

export default MakingOptionsMain;
