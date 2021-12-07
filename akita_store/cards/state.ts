import { createEntityQuery, createEntityStore } from "@datorama/akita";
import { Card } from "./model";

export const cardsStore = createEntityStore<Card>({}, { name: "cards" });

export const cardsQuery = createEntityQuery<Card>(cardsStore);

export const cards$ = cardsQuery.selectAll();
