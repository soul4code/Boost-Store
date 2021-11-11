import { useEffect, useState } from "react";
import getList from "../../calculator/getList";
import PersonalMissionNone from "./PersonalMissionNone";
import PersonalMissionTask from "./PersonalMissionTask";
import PersonalMissionTypeTank from "./PersonalMissionTypeTank";

const PersonalMissionSidebar = (props) => {
  let [currentArray, setCurrentArray] = useState();

  useEffect(() => {
    const filterDataCurrentTank = (() => {
      let array;
      if (props.currentTank) {
        array = props.choiseTank.filter(
          (model) => model.MODEL == props.currentTank
        );
        setCurrentArray(array);
      }
    })();
  }, [props.currentTank]);

  const [typeTankList, setTypeTankList] = useState();
  const [currentTypeItem, setCurrentTypeItem] = useState(0);

  useEffect(() => {
    const getTypeTankList = (() => {
      if (currentArray) {
        setTypeTankList(
          currentArray[0].TYPE_TASKS.map((type, index) => {
            return (
              <PersonalMissionTypeTank
                key={index}
                index={index}
                currentTypeItem={currentTypeItem}
                setCurrentTypeItem={setCurrentTypeItem}
                title={type.TITLE}
                icon={type.ICON}
                tasksList={type.TASKS_LIST}
              />
            );
          })
        );
      }
    })();
  }, [currentArray, currentTypeItem]);

  const [currentTasksList, setCurrentTasksList] = useState();

  useEffect(() => {
    const getActiveType = (() => {
      if (typeTankList) {
        setCurrentTasksList(
          typeTankList.filter((i, index) => index === currentTypeItem)
        );
      }
    })();
  }, [currentTypeItem, typeTankList]);

  const [taskItemsList, setTaskItemsList] = useState();

  useEffect(() => {
    const getInitialTaskItemsList = (() => {
      if (currentTasksList && currentTasksList.length > 0) {
        setTaskItemsList(currentTasksList[0].props.tasksList);
      }
    })();
  }, [currentTasksList]);

  const [tasksArray, setTasksArray] = useState([]);
  const [taskItemData,setTaskItemData]=useState({})

  const getTasksArray = (index, taskData) => {
    setTaskItemData({index, taskData})
    // getList(tasksArray, index, "data", taskData, setTasksArray);
  };
  useEffect(()=>{
    if(taskItemData){
      getList(tasksArray, taskItemData.index, "data", taskItemData.taskData, setTasksArray);
    }
    
  },[taskItemData])

  useEffect(()=>{
    if(props.getSelectedTasks){
      props.getSelectedTasks(currentArray, tasksArray)
    }
    
  },[tasksArray])

  const [tasksList, setTasksList] = useState();
  useEffect(() => {
    if (taskItemsList) {
      setTasksList(
        Object.values(taskItemsList).map((i, index) => {
          if (index === Object.keys(taskItemsList).length - 1) {
            return (
              <PersonalMissionTask
                id={i.ID}
                key={i.ID}
                index={index}
                title={"All"}
                info={i.INFO}
                price={i.PRICE}
                addService={i.ADD_SERVICE}
                discount={i.DISCOUNT}
                isActive={true}
                addClass="matchmaking__card3-type-label-all"
                getTasksArray={getTasksArray}
              />
            );
          } else {
            return (
              <PersonalMissionTask
                id={i.ID}
                key={i.ID}
                index={index}
                title={i.TITLE}
                info={i.INFO}
                price={i.PRICE}
                addService={i.ADD_SERVICE}
                discount={i.DISCOUNT}
                getTasksArray={getTasksArray}
              />
            );
          }
        })
      );
    } else {
      setTasksList(null);
    }
  }, [taskItemsList]);


  useEffect(() => {
    // стартовое заполнение tasksList
    if (taskItemsList) {
      let data = [];
      console.log(Object.values(taskItemsList)[0]);
      for (let i = 0; i < Object.values(taskItemsList).length; i++) {
        data[i] = {
          index: i,
          data: Object.values(taskItemsList)[i],
        };
      }
      setTasksArray(data);
    }
  }, [taskItemsList]);


  if (currentArray) {
    return (
      <div
        className="matchmaking__card3-item matchmaking__card3-choice"
      >
        <div className="matchmaking__card3-className">{typeTankList}</div>
        <div className="matchmaking__card3-type">{tasksList}</div>
      </div>
    );
  } else {
    return <div>Выберите танк</div>;
  }
};

export default PersonalMissionSidebar;
