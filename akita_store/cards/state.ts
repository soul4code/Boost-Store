import {
  createEntityQuery,
  createEntityStore,
  EntityState,
} from "@datorama/akita";
import { Card } from "./model";

export const cardsStore = createEntityStore<EntityState<Card>>(
  {},
  { name: "cards" }
);

export const cardsQuery = createEntityQuery<EntityState<Card>>(cardsStore);

export const cards$ = cardsQuery.selectAll();
