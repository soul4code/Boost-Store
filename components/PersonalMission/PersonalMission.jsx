import { useEffect, useState } from "react";
import getList from "../../calculator/getList";
import PersonalMissionEnd from "../PersonalMissionEnd/PersonalMissionEnd";
import PersonalMissionMain from "../PersonalMissionMain/PersonalMissionMain";
import PersonalMissionSidebar from "../PersonalMissionSidebar/PersonalMissionSidebar";

const PersonalMission = (props) => {
  console.log(props);
  const [currentTank, setCurrentTank] = useState(props.choiseTank[0].MODEL);

  const [selectedTasks, setSelectedTasks] = useState([]);

  const getSelectedTasks = (index, data) => {
    setSelectedTasks(
      selectedTasks.map((i) => {
        if (index === i.index) {
          return {
            ...i,
            
            TYPE_TASKS: [...i.data.TYPE_TASKS, { o: 1, a: 3 }],
          };
        }
        if (index !== i.index) {
          return { ...i };
        }
      })
    );
  };

  useEffect(() => {
    // стартовое заполнение selectedTasks
    let data = [];
    for (let i = 0; i < props.choiseTank.length; i++) {
      data[i] = {
        index: i,
        data: props.choiseTank[i],
      };
    }
    setSelectedTasks(data);
  }, []);

  return (
    <div className="matchmaking__card3-inner">
      <PersonalMissionSidebar
        currentTank={currentTank}
        choiseTank={props.choiseTank}
        getSelectedTasks={getSelectedTasks}
      />

      <PersonalMissionMain
        choiseTank={props.choiseTank}
        setCurrentTank={setCurrentTank}
        isExtraOptions={props.IS_EXTRA_OPTIONS}
      />

      <PersonalMissionEnd
        isExtraOptions={props.isExtraOptions}
        extraOptions={props.extraOptions}
      />
    </div>
  );
};

export default PersonalMission;
