import { orderStore } from "./state";
import { Card } from "../cards";
import { getOrderFromCard } from "./generators";
import { getOrderCalculator } from "./calculators/registry";
import * as api from "./api";

class OrderService {
  setOrderFromCard(game: string, code: string, card: Card) {
    const currentOrder = orderStore.getValue();
    if (
      currentOrder.id &&
      currentOrder.game === game &&
      currentOrder.code === code
    ) {
      return;
    }
    orderStore.update({
      game,
      code,
      ...getOrderFromCard(card),
    });
  }

  setOrderStage(stage: string): void {
    orderStore.update({ stage });
  }

  addToCart(data: {
    NAME: string;
    EMAIL: string;
    PRICE: string;
    CURRENCY: string;
  }): Promise<void> {
    return api
      .addToCart(data)
      .then(({ ORDER_ID: id }) => orderStore.update({ id }));
  }

  setOrderPrice(price: number): void {
    orderStore.update({ price });
  }

  setOrderOptions(options: any): void {
    const optionsPrice = Object.values(options).reduce(
      (prev, curr: any) =>
        prev + (curr.sign === "-" ? curr.price * -1 : curr.price),
      0
    ) as number;
    orderStore.update({ optionsPrice, options });
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
      orderProps: { ...props.orderProps, ...newProps },
    }));
  }
}

export const orderService = new OrderService();
