import { useEffect, useState } from "react";
import PersonalMissionEnd from "../PersonalMissionEnd/PersonalMissionEnd";
import PersonalMissionMain from "../PersonalMissionMain/PersonalMissionMain";
import PersonalMissionSidebar from "../PersonalMissionSidebar/PersonalMissionSidebar";

const PersonalMission = (props) => {

    const [currentTank, setCurrentTank]=useState('Stug IV')

  return (
    <div className="matchmaking__card3-inner">
      <PersonalMissionSidebar currentTank={currentTank} choiseTank={props.choiseTank}/>

      <PersonalMissionMain choiseTank={props.choiseTank} setCurrentTank={setCurrentTank} isExtraOptions={props.IS_EXTRA_OPTIONS}/>

      <PersonalMissionEnd isExtraOptions={props.isExtraOptions} extraOptions={props.extraOptions}/>
    </div>
  );
};

export default PersonalMission;
