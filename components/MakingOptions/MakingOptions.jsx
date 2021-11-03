import MakingInfo from "../MakingInfo/MakingInfo";
import MakingOprionsScrollbarsMobil from "../MakingOprionsScrollbarsMobil/MakingOprionsScrollbarsMobil";
import MakingOptionsMain from "../MakingOptionsMain/MakingOptionsMain";

const MakingOptions = (props) => {
  console.log(props)
  return (
    <div className="matchmaking__bottom-inner matchmaking__bottom-inner-card2">
      <MakingOptionsMain list={props.positionList} isExtraOptions={props.isExtraOptions}/>

      <div className="matchmaking__info-wrapper">
        <MakingOprionsScrollbarsMobil />
        <MakingInfo addClass={'matchmaking__info-card2'} description={props.description}/>
      </div>
    </div>
  );
};

export default MakingOptions;
