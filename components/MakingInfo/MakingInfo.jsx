import { useState } from "react";
import ButtonCardTemplateColor from "../common/ButtonCardTemplateColor";
import Enum from "../common/Enum";
import OrderStages from "../OrderStages";

const MakingInfo = ({addClass, description, priceEnd, daysEnd}) => {

  return (
    <div className={`matchmaking__info ${addClass}`}>
      <div className="matchmaking__info-left matchmaking__info-left-card2">
        <OrderStages />
        <p className="matchmaking__info-text">{description}</p>
      </div>

      <div className="matchmaking__info-right matchmaking__info-right-card3">
        
        <Enum isLarge={true} num={priceEnd}/>
        <Enum  title={'Deadline'} num={daysEnd} measure={'days'} />

        <div className="matchmaking__info-btns matchmaking__info-btns-start">
          <ButtonCardTemplateColor />
          <button className="button-transp matchmaking__info-btn">
            <p>add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakingInfo;
