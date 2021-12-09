import { currenciesStore } from "./state";

export function setCurrentCurrency(code: string): void {
  currenciesStore.setActive(code);
}
