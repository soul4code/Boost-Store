const PersonalMissionTaskAdd = ({isActive, action}) => {
  return (
    <div className={`matchmaking__card3-type-box`} onClick={(e)=>{action(e)}}>
      <span className={`matchmaking__card3-type-checkbox-min ${isActive && 'matchmaking__card3-type-checkbox-min-checked'}`}></span>
      <div className="matchmaking__card3-type-text">
        With honors
        <span>1$</span>
      </div>
    </div>
  );
};

export default PersonalMissionTaskAdd;
