import { Card } from "./model";
import { cardsStore } from "./state";

export function setCards(cards: Card[]): void {
  cardsStore.set(cards);
}
