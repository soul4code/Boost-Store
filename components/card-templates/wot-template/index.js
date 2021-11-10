import CategoriesGradient from "../../CategoriesGradient/CategoriesGradient";
import MakingHeader from "../../MakingHeader/MakingHeader";
import MakingInfo from "../../MakingInfo/MakingInfo";
import PersonalMission from "../../PersonalMission/PersonalMission";

const WotTemplate = (props) => {

  return (
    <>
      <h1 className="game__title page__title">{props.NAME}</h1>
      <CategoriesGradient currentGame={props.currentGame}/>

      <section className="matchmaking block-bg matchmaking-card3">
        <MakingHeader title={props.TITLE} advantages={props.ADVANTAGES}/>
        <PersonalMission choiseTank={props.CHOISE_TANKS} isExtraOptions={props.IS_EXTRA_OPTIONS} extraOptions={props.EXTRA_OPTIONS}/>
        <MakingInfo />
      </section>
    </>
  );
};

export default WotTemplate;
