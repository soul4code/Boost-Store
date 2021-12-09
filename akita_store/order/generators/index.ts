import { Card } from "../../cards";
import { getOrderGenerator } from "./registry";

export const getOrderFromCard = (card: Card) => {
  const generator = getOrderGenerator(card.PROPERTY_CARD_TEMPLATE_VALUE);
  return generator(card);
};
