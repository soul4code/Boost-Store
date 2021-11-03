import RangeExperience from "../card-templates/options-template/RangeExperience";
import RangeSkill from "../card-templates/options-template/RangeSkill";

const MakingOprionsScrollbarsMobil = () => {
  return (
    <div className="matchmaking__card2-box matchmaking__card2-box-mobil">
      <div className="subtitle__page">Options</div>
      <div className="matchmaking__min-scrollbar-box matchmaking__scrollbar-start">
        <div className="matchmaking__min-scrollbar-title">Skill</div>
        <div className="matchmaking__min-scrollbar-box matchmaking__scrollbar-start">
          <RangeSkill />
        </div>
      </div>
      <div className="matchmaking__min-scrollbar-box">
        <div className="matchmaking__min-scrollbar-title">Experience</div>
        <div className="matchmaking__min-scrollbar-box">
          <RangeExperience />
        </div>
      </div>
    </div>
  );
};

export default MakingOprionsScrollbarsMobil;
