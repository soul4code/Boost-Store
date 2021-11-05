import ExtraOptions from "../ExtraOptions/ExtraOptions";
import ProgressbarList from "./ProgressbarList";

const MakingOptionsMain = ({
  list,
  isExtraOptions,
  input,
  options,
  progressbar,
  getPriceList
}) => {
  return (
    <div className="matchmaking__options-card2">
      {/* <div className="matchmaking__card2-box">
        <div className="subtitle__page">Boost variants</div>
        <MakingOprionsVariants list={list} />
      </div> */}
      <ProgressbarList
        input={input}
        options={options}
        progressbar={progressbar}
        getPriceList={getPriceList}
      />
      {isExtraOptions ? (
        <div className="matchmaking__card2-box matchmaking__card2-box-extra">
          <ExtraOptions />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MakingOptionsMain;
