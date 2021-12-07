import { createQuery, createStore } from "@datorama/akita";

export interface OrderState {
  game?: string;
  code?: string;
  stage?: string;
}

export const orderStore = createStore<OrderState>({}, { name: "order" });

export const orderQuery = createQuery<OrderState>(orderStore);

export const order$ = orderQuery.select();

export const orderGame$ = orderQuery.select("game");

export const orderStage$ = orderQuery.select("stage");
