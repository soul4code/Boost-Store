import { useEffect, useState } from "react";
import PersonalMissionNone from "./PersonalMissionNone";
import PersonalMissionTask from "./PersonalMissionTask";
import PersonalMissionTasksAll from "./PersonalMissionTasksAll";
import PersonalMissionTypeTank from "./PersonalMissionTypeTank";

const PersonalMissionSidebar = (props) => {
  let [currentArray, setCurrentArray] = useState();

  useEffect(() => {
    if (props.currentTank) {
      currentArray = props.choiseTank.filter(
        (model) => model.MODEL == props.currentTank
      );
      setCurrentArray(currentArray);
    }
  }, [props.currentTank]);

  const [typeTankList, setTypeTankList] = useState();
  useEffect(() => {
    if (currentArray) {
      setTypeTankList(
        currentArray[0].TYPE_TASKS.map((type) => (
          <PersonalMissionTypeTank
            title={type.TITLE}
            icon={type.ICON}
            tasks={type.TASKS_LIST}
            getCurrentType={getCurrentType}
            isActive={false}
          />
        ))
      );
    }
  }, [currentArray]);

  let [currentType, setCurrentType] = useState();

  useEffect(() => {
    const initialCurrentType = () => {
      if (currentArray) {
        setCurrentType(currentArray[0].TYPE_TASKS[0].TITLE);
        setTypeTankList(
          currentArray[0].TYPE_TASKS.map((type, index) => {
            if (index === 0) {
              return (
                <PersonalMissionTypeTank
                  title={type.TITLE}
                  icon={type.ICON}
                  tasksList={type.TASKS_LIST}
                  getCurrentType={getCurrentType}
                  isActive={true}
                />
              );
            } else {
              return (
                <PersonalMissionTypeTank
                  title={type.TITLE}
                  icon={type.ICON}
                  tasksList={type.TASKS_LIST}
                  getCurrentType={getCurrentType}
                  isActive={false}
                />
              );
            }
          })
        );
      }
    };
    initialCurrentType();
  }, [currentArray]);

  const getCurrentType = (t) => {
    setCurrentType(t);
    setTypeTankList(
      currentArray[0].TYPE_TASKS.map((type) => {
        if (type.TITLE == t) {
          return (
            <PersonalMissionTypeTank
              title={type.TITLE}
              icon={type.ICON}
              tasksList={type.TASKS_LIST}
              getCurrentType={getCurrentType}
              isActive={true}
            />
          );
        }
        if (type.TITLE != t) {
          return (
            <PersonalMissionTypeTank
              title={type.TITLE}
              icon={type.ICON}
              tasksList={type.TASKS_LIST}
              getCurrentType={getCurrentType}
              isActive={false}
            />
          );
        }
      })
    );
  };

  const [currentTasksList, setCurrentTasksList] = useState();

  useEffect(() => {
    const getActiveType = () => {
      if (typeTankList) {

        setCurrentTasksList(
          typeTankList.filter((active) => active.props.title === currentType)
        );
      }
    };
    getActiveType();
  }, [currentType, typeTankList]);

  const [taskItemsList, setTaskItemsList] = useState();

  useEffect(() => {
    const getInitialTaskItemsList = () => {
      if (currentTasksList && currentTasksList.length > 0) {
          setTaskItemsList(currentTasksList[0].props.tasksList);
      }
    };
    getInitialTaskItemsList();
  }, [currentTasksList]);

  const [tasksList, setTasksList] = useState();
  useEffect(() => {

    if (taskItemsList) {
      setTasksList(
        Object.values(taskItemsList).map((i) => (
          <PersonalMissionTask
            title={i.TITLE}
            info={i.INFO}
            price={i.PRICE}
            discount={i.DISCOUNT}
            getSelectTasks={getSelectTasks}
          />
        ))
      );
    }else{
      setTasksList(null)
    }
  }, [taskItemsList]);

  const [tasksListWithAll, setTasksListWithAll] = useState();

  useEffect(() => {
    if (tasksList) {
      setTasksListWithAll(
        tasksList.map((i, index) => {
          if (index == tasksList.length - 1) {
            return (
              <PersonalMissionTasksAll
                info={i.props.info}
                price={i.props.price}
                discount={i.props.discount}
                isActive={i.props.isActive}
                getSelectTasks={i.props.getSelectTasks}
              />
            );
          }
          if (index !== tasksList.length - 1) {
            return i;
          }
        })
      );
    } else{
      setTasksListWithAll(<PersonalMissionNone />)
    }
  }, [tasksList]);

  const [checkedTasks, setCheckedTasks] = useState([]);

  const getSelectTasks = (title) => {
    setCheckedTasks((checkedTasks) => [...checkedTasks, title]);
  };

  if (currentArray) {
    return (
      <div className="matchmaking__card3-item matchmaking__card3-choice">
        <div className="matchmaking__card3-className">{typeTankList}</div>
        <div className="matchmaking__card3-type">{tasksListWithAll}</div>
      </div>
    );
  } else {
    return <div>Выберите танк</div>;
  }
};

export default PersonalMissionSidebar;
