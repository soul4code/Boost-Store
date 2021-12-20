import { Card } from "../../cards";
import { OrderState } from "../state";
import { CardTemplateValue } from "../../../configs/types";
import { calculateBasePrice, calculateBaseDays } from "../calculators/progress";

export const progressOrderGenerator = (card: Card): Partial<OrderState> => {
  const start = card.DEFAULT_VALUE_FIRST;
  const end = card.DEFAULT_VALUE_SECOND;
  const boost_durations = [
    { min: 0, max: 1000, duration: 0.001 },
    { min: 1001, max: 2000, duration: 0.003 },
    { min: 2001, max: 4500, duration: 0.005 },
  ];
  const dailyPrice = +card.PRICE;
  const days = calculateBaseDays({ boost_durations }, { start, end });
  const price = calculateBasePrice(days, dailyPrice);
  return {
    stage: "1",
    price,
    days,
    basePrice: +card.PRICE,
    baseDays: +card.DAYS_IN_COUNT,
    template: CardTemplateValue.PROGRESS,
    orderProps: {
      start,
      end,
      boost_durations,
      dailyPrice,
    },
  };
};
