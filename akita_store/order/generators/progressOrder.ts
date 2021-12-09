import { Card } from "../../cards";
import { OrderState } from "../state";
import { CardTemplateValue } from "../../../configs/types";
import { calculateBasePrice, calculateBaseDays } from "../calculators/progress";

export const progressOrderGenerator = (card: Card): Partial<OrderState> => {
  const start = card.DEFAULT_VALUE_FIRST;
  const end = card.DEFAULT_VALUE_SECOND;
  return {
    stage: "1",
    price: calculateBasePrice({ start, end }, +card.PRICE),
    days: calculateBaseDays({ start, end }, +card.DAYS_IN_COUNT),
    basePrice: +card.PRICE,
    baseDays: +card.DAYS_IN_COUNT,
    template: CardTemplateValue.PROGRESS,
    orderProps: {
      start,
      end,
    },
  };
};
