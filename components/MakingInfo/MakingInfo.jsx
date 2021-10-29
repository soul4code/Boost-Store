import ButtonCardTemplateColor from "../common/ButtonCardTemplateColor";
import OrderStages from "../OrderStages";

const MakingInfo = (props) => {
  return (
    <div className="matchmaking__info matchmaking__info-card3">
      <div className="matchmaking__info-left matchmaking__info-left-card2">
        <OrderStages />
        <p className="matchmaking__info-text">{props.DESCRIPTION}</p>
      </div>
      <div className="matchmaking__info-right matchmaking__info-right-card3">
        <div className="enum enum__matchmaking">
          <div className="enum__title">Price</div>
          <div className="enum__dots">
            ................................................................................................................................................
          </div>
          <div className="enum__result enum__result-matchmaking">1 000$</div>
        </div>
        <div className="enum enum__matchmaking">
          <div className="enum__title">Deadline</div>
          <div className="enum__dots">
            ................................................................................................................................................
          </div>
          <div className="enum__result">30 days</div>
        </div>
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
