import { createQuery, createStore } from "@datorama/akita";
import { CardTemplateValue } from "../../configs/types";
import { selectConvertedToCurrent$ } from "../currencies";
import { switchMap } from "rxjs/operators";

export interface ProgressTemplateProps {
  start: number;
  end: number;
}

export interface OrderState {
  game?: string;
  code?: string;
  stage?: string;
  price?: number;
  days: number;
  basePrice: number;
  baseDays: number;
  template: CardTemplateValue;
  orderProps: Record<string, unknown>;
}

export const orderStore = createStore<OrderState>({}, { name: "order" });

export const orderQuery = createQuery<OrderState>(orderStore);

export const order$ = orderQuery.select();

export const orderGame$ = orderQuery.select("game");

export const orderStage$ = orderQuery.select("stage");

export const orderPrice$ = orderQuery.select("price");

export const orderPriceCurrencyAware$ = orderPrice$.pipe(
  switchMap((price) => selectConvertedToCurrent$(price))
);
