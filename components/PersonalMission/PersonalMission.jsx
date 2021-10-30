import { useEffect, useState } from "react";
import PersonalMissionEnd from "../PersonalMissionEnd/PersonalMissionEnd";
import PersonalMissionMain from "../PersonalMissionMain/PersonalMissionMain";
import PersonalMissionSidebar from "../PersonalMissionSidebar/PersonalMissionSidebar";

const PersonalMission = (props) => {
    console.log(props)
    const [currentTank, setCurrentTank]=useState('Stug IV')

  return (
    <div className="matchmaking__card3-inner">
      <PersonalMissionSidebar currentTank={currentTank} choiseTank={props.choiseTank}/>

      <PersonalMissionMain choiseTank={props.choiseTank} setCurrentTank={setCurrentTank}/>

      <PersonalMissionEnd />
    </div>
  );
};

export default PersonalMission;
