import { useState } from "react";
import CategoriesGradient from "../../CategoriesGradient/CategoriesGradient";
import ButtonCardTemplateColor from "../../common/ButtonCardTemplateColor";
import OrderStages from "../../OrderStages";

import SelectDarkBlue from "../../common/SelectDarkBlue/SelectDarkBlue";
import MakingHeader from "../../MakingHeader/MakingHeader";
import MakingProgressMain from "../../MakingProgressMain/MakingProgressMain";
import MakingProgressFooter from "../../MakingProgressFooter/MakingProgressFooter";
import MakingProgress from "../../MakingProgress/MakingProgress";

const MmrTemplate = (props) => {
  return (
    <>
      <h1 className="game__title page__title">{props.name}</h1>
      <CategoriesGradient currentGame={props.currentGame} />
      <section className="matchmaking block-bg">
        <MakingHeader title={props.TITLE} advantages={props.ADVANTAGES} />
        <MakingProgress {...props}/>
      </section>
    </>
  );
};

export default MmrTemplate;
