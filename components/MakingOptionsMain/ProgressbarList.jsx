import RangeExperience from "../card-templates/options-template/RangeExperience";
import Progressbar from "./Progressbar";

const ProgressbarList = ({ options, progressbar, getPriceList }) => {
  let progressList;

  if (progressbar) {
    progressList = progressbar.map((p, index) => (
      <Progressbar {...p} key={index} index={index} getPriceList={getPriceList}/>
    ));
  }

  

  return (
    <div className="matchmaking__card2-box matchmaking__card2-box-progress">
      <div className="subtitle__page">Options</div>
      {progressList}
      <div className="matchmaking__min-scrollbar-box">
        <RangeExperience />
      </div>
    </div>
  );
};

export default ProgressbarList;
