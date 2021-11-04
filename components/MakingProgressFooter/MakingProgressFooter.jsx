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
        {/* <div className="matchmaking__options-title subtitle__page">
          <p>Extra Options</p>
        </div>
        <div className="options-checkbox matchmaking__options-checkbox">
          <label className="matchmaking__options-label">
            <input className="options-checkbox-input" type="checkbox" />
            <span className="checkbox-circle"></span>
            <span className="checkbox-text">Play with booster (Duo/Lobby)</span>
          </label>
          <label className="matchmaking__options-label">
            <input className="options-checkbox-input" type="checkbox" />
            <span className="checkbox-circle"></span>
            <span className="checkbox-text">+1 Win Extra</span>
            <div className="checkbox-info">
              <span>i</span>
              <div className="checkbox-info-text matchmaking__checkbox-info-text">
                <p>
                  "Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium
                </p>
                <img src="img/matchmaking/info-bg.svg" alt="" />
              </div>
            </div>
          </label>
          <label className="matchmaking__options-label">
            <input className="options-checkbox-input" type="checkbox" />
            <span className="checkbox-circle"></span>
            <span className="checkbox-text">Priority order</span>
            <div className="checkbox-benefit">+15%</div>
          </label>
          <label className="matchmaking__options-label">
            <input className="options-checkbox-input" type="checkbox" />
            <span className="checkbox-circle"></span>
            <span className="checkbox-text">Live stream</span>
            <div className="checkbox-benefit">+5$</div>
            <div className="checkbox-info">
              <span>i</span>
              <div className="checkbox-info-text matchmaking__checkbox-info-text">
                <p>
                  "Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium
                </p>
                <img src="img/matchmaking/info-bg.svg" alt="" />
              </div>
            </div>
          </label>
        </div> */}
      </div>
      <div className="matchmaking__info">
        <div className="matchmaking__info-left">
          <OrderStages />
          <p className="matchmaking__info-text">
            {props.description}
          </p>
        </div>
        <div className="matchmaking__info-right">
          <Enum isLarge={true}/>
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
