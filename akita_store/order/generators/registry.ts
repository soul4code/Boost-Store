import { CardTemplateValue } from "../../../configs/types";
import { OrderState } from "../state";
import { Card } from "../../cards";
import { progressOrderGenerator } from "./progressOrder";

type OrderGenerator = (card: Card) => Partial<OrderState>;

const REGISTRY = {};

const defaultGenerator = () => {};

const addOrderGenerator = (
  template: CardTemplateValue,
  generator: OrderGenerator
) => {
  REGISTRY[template] = generator;
};

export const getOrderGenerator = (
  template: CardTemplateValue
): OrderGenerator => {
  return REGISTRY[template] || defaultGenerator;
};

addOrderGenerator(CardTemplateValue.PROGRESS, progressOrderGenerator);
