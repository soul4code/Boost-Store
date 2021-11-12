import { useState } from "react";
import ButtonCardTemplateColor from "../common/ButtonCardTemplateColor";
import Enum from "../common/Enum";
import ExtraOptions from "../ExtraOptions/ExtraOptions";
import OrderStages from "../OrderStages";

const MakingProgressFooter = (props) => {

    const [checkedOptions, setCheckedOptions] = useState([]);

    const getCheckedOptions = (e) => {
      setCheckedOptions((checkedOptions) => [...checkedOptions, e]);
    };

  return (
    <div className="matchmaking__bottom-inner">
      <div className="matchmaking__options">
          <ExtraOptions isExtraOptions={props.isExtraOptions} extraOptions={props.extraOptions} getCheckedOptions={getCheckedOptions}/>
      </div>
      <div className="matchmaking__info">
        <div className="matchmaking__info-left">
          <OrderStages />
          <p className="matchmaking__info-text">
            {props.description}
          </p>
        </div>
        <div className="matchmaking__info-right">
          <Enum isLarge={true} num={props.price}/>
          <Enum title={'Deadline'} num={30} measure={'days'} />
          
          <div className="matchmaking__info-btns">
            <ButtonCardTemplateColor />
            <button className="button-transp matchmaking__info-btn">
              <p>add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakingProgressFooter;
