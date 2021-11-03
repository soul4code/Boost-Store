import RangeExperience from "../card-templates/options-template/RangeExperience";
import RangeSkill from "../card-templates/options-template/RangeSkill";
import ExtraOptions from "../ExtraOptions/ExtraOptions";
import MakingOprionsVariants from "../MakingOprionsVariants/MakingOprionsVariants";

const MakingOptionsMain = ({ list, isExtraOptions }) => {
  return (
    <div className="matchmaking__options-card2">
      <div className="matchmaking__card2-box">
        <div className="subtitle__page">Boost variants</div>
        <MakingOprionsVariants list={list} />
      </div>
      <div className="matchmaking__card2-box matchmaking__card2-box-progress">
        <div className="subtitle__page">Options</div>
        <div className="matchmaking__min-scrollbar-box matchmaking__scrollbar-start">
          <RangeSkill />
        </div>
        <div className="matchmaking__min-scrollbar-box">
          <RangeExperience />
        </div>
      </div>
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
