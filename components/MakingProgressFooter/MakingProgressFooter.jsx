import { useCallback, useState } from "react";
import ButtonCardTemplateColor from "../common/ButtonCardTemplateColor";
import Enum from "../common/Enum";
import ExtraOptions from "../ExtraOptions/ExtraOptions";
import OrderStages from "../OrderStages";
import { orderService, orderStore } from "../../akita_store/order";

const MakingProgressFooter = (props) => {
  const [checkedOptions, setCheckedOptions] = useState([]);

  const getCheckedOptions = (e) => {
    setCheckedOptions((checkedOptions) => [...checkedOptions, e]);
  };

  const onClickBuyNow = useCallback(() => {
    const { name: NAME, id: ID, price: PRICE } = props;
    orderService.addToCart({ NAME, ID, PRICE }).then(() => {
      void orderStore.update({ stage: "2" });
    });
  }, [props]);

  const onClickAddToCard = useCallback(() => {
    const { name: NAME, id: ID, price: PRICE } = props;
    void orderService.addToCart({ NAME, ID, PRICE });
  }, [props]);

  return (
    <div className="matchmaking__bottom-inner">
      <div className="matchmaking__options">
        <ExtraOptions
          isExtraOptions={props.isExtraOptions}
          extraOptions={props.extraOptions}
          getCheckedOptions={props.getExtraOptionsList}
        />
      </div>
      <div className="matchmaking__info">
        <div className="matchmaking__info-left">
          <OrderStages currentStage={1} />
          <p className="matchmaking__info-text">{props.description}</p>
        </div>
        <div className="matchmaking__info-right">
          <Enum isLarge={true} num={props.price} measure={props.currencySign} />
          <Enum title={"Deadline"} num={props.days} measure={"days"} />

          <div className="matchmaking__info-btns">
            <ButtonCardTemplateColor action={onClickBuyNow} />
            <button
              onClick={onClickAddToCard}
              className="button-transp matchmaking__info-btn"
            >
              <p>add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakingProgressFooter;
