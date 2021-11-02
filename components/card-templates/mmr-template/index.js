import { useState } from "react";
import CategoriesGradient from "../../CategoriesGradient/CategoriesGradient";
import ButtonCardTemplateColor from "../../common/ButtonCardTemplateColor";
import OrderStages from "../../OrderStages";

import SelectDarkBlue from "../../SelectDarkBlue/SelectDarkBlue";
import MakingHeader from "../../MakingHeader/MakingHeader";
import MakingProgressMain from "../../MakingProgressMain/MakingProgressMain";
import MakingProgressFooter from "../../MakingProgressFooter/MakingProgressFooter";

const MmrTemplate = (props) => {
  console.log(props)
  // сюда собираем данные о том, что выбрал пользователь
  let [orderData, setOrderData] = useState();

  // указал ли пользователь всю необзодимую информацию или что-то пропустил
  let [isAllData, setIsAllData] = useState(false);

  const nextStage = () => {
    if (isAllData) {
    } else {
      return alert("вы заполнили не все поля");
    }
  };

  return (
    <>
      <h1 className="game__title page__title">{props.name}</h1>
      <CategoriesGradient currentGame={props.currentGame} />
      <section className="matchmaking block-bg">
        <MakingHeader title={props.TITLE} advantages={props.ADVANTAGES}/>
        <MakingProgressMain positionList={props.POSITION_LIST}/>
        <MakingProgressFooter description={props.DESCRIPTION} isExtraOptions={props.IS_EXTRA_OPTIONS} extraOptions={props.EXTRA_OPTIONS}/>
      </section>
    </>
  );
};

export default MmrTemplate;
