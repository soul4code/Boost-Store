import { orderStore } from "./state";
import { Card } from "../cards";
import { getOrderFromCard } from "./generators";
import { getOrderCalculator } from "./calculators/registry";

class OrderService {
  setOrderFromCard(game: string, code: string, card: Card) {
    orderStore.update({
      game,
      code,
      ...getOrderFromCard(card),
    });
  }

  setOrderStage(stage: string): void {
    orderStore.update({ stage });
  }

  setOrderPrice(price: number): void {
    orderStore.update({ price });
  }

  setOrderProps(newProps: Record<string, unknown>): void {
    const order = orderStore.getValue();
    const calculatorService = getOrderCalculator(order.template);
    const days =
      calculatorService?.calculateBaseDays(order.orderProps, order.baseDays) ||
      order.days;
    const price =
      calculatorService?.calculateBasePrice(
        order.orderProps,
        order.basePrice
      ) || order.price;
    orderStore.update((props) => ({
      days,
      price,
      orderProps: { ...props, ...newProps },
    }));
  }
}

export const orderService = new OrderService();
