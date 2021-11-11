const PersonalMissionTaskAdd = ({isActive, action, getTasksArray, props}) => {
  return (
    <div className={`matchmaking__card3-type-box`} onClick={(e)=>{action(e)}}>
      {/* getTasksArray(props.index, props) */}
      <span className={`matchmaking__card3-type-checkbox-min ${isActive && 'matchmaking__card3-type-checkbox-min-checked'}`}></span>
      <div className="matchmaking__card3-type-text">
        With honors
        <span>1$</span>
      </div>
    </div>
  );
};

export default PersonalMissionTaskAdd;
