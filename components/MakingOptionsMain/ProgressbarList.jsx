import RangeExperience from "../card-templates/options-template/RangeExperience";
import RangeSkill from "../card-templates/options-template/RangeSkill";
import InputDarkBlue from "../InputDarkBlue/InputDarkBlue";
import SelectDarkBlue from "../SelectDarkBlue/SelectDarkBlue";
import Progressbar from "./Progressbar";

const ProgressbarList = ({options, progressbar}) => {
    
    let progressList

    if(progressbar){
        progressList = progressbar.map(p=>(
          <Progressbar title={p.dataProgressbar.title} isInput={p.isInput} defaultValue={p.inputProgressbar.defaultValue}/>
        ))
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
