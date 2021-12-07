import CategoriesGradient from "../../CategoriesGradient/CategoriesGradient";

import MakingHeader from "../../MakingHeader/MakingHeader";
import MakingProgress from "../../MakingProgress/MakingProgress";

const MmrTemplate = (props) => {
  return (
    <>
      <h1 className="game__title page__title">{props.name}</h1>
      <CategoriesGradient currentGame={props.currentGame} />
      <section className="matchmaking block-bg">
        <MakingHeader title={props.TITLE} advantages={props.ADVANTAGES} />
        <MakingProgress {...props} />
      </section>
    </>
  );
};

export default MmrTemplate;
