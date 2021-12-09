import { CardTemplateValue } from "../../../configs/types";
import * as progressCalculatorService from "./progress";

interface OrderCalculator {
  calculateBasePrice: (...any) => number;
  calculateBaseDays: (...any) => number;
}

type OrderCalculatorsRegistry = Record<CardTemplateValue, OrderCalculator>;

const REGISTRY: OrderCalculatorsRegistry = {} as OrderCalculatorsRegistry;

const addOrderCalculator = (
  template: CardTemplateValue,
  calculator: OrderCalculator
) => {
  REGISTRY[template] = calculator;
};

export const getOrderCalculator = (
  template: CardTemplateValue
): OrderCalculator => {
  return REGISTRY[template];
};

addOrderCalculator(CardTemplateValue.PROGRESS, progressCalculatorService);
