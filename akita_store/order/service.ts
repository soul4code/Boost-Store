import { orderStore } from "./state";

class OrderService {
  setOrderGame(game: string): void {
    orderStore.update({ game, stage: "1" });
  }

  setOrderCode(code: string): void {
    orderStore.update({ code });
  }

  setOrderStage(stage: string): void {
    orderStore.update({ stage });
  }
}

export const orderService = new OrderService();
