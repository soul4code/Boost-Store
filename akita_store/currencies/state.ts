import {
  createEntityQuery,
  createEntityStore,
  EntityState,
} from "@datorama/akita";
import { Currency, ExchangeRate } from "./model";
import { Observable, combineLatest } from "rxjs";
import { map } from "rxjs/operators";

const DEFAULT_CURRENCY = "USD";

export interface CurrenciesState extends EntityState<Currency> {
  exchangeRates: ExchangeRate[];
}

export const currenciesStore = createEntityStore<CurrenciesState>(
  {
    exchangeRates: [
      { to: "EUR", rate: 0.88 },
      { to: "GBP", rate: 0.76 },
    ],
  },
  { name: "currencies", idKey: "code" }
);

export const currenciesQuery =
  createEntityQuery<CurrenciesState>(currenciesStore);

export const currencies$ = currenciesQuery.selectAll();

export const currentCurrency$ =
  currenciesQuery.selectActive() as Observable<Currency>;

export const exchangeRates$ = currenciesQuery.select("exchangeRates");

export const selectConvertedToCurrent$ = (
  value: number
): Observable<number> => {
  return combineLatest([exchangeRates$, currentCurrency$]).pipe(
    map(([rates, currency]) => {
      if (currency.code === DEFAULT_CURRENCY) {
        return value;
      } else {
        const exchangeRate = rates.find((rate) => rate.to === currency.code);
        if (!exchangeRate) {
          throw `Unknown exchange rate for ${DEFAULT_CURRENCY}/${currency.code}`;
        }
        return +(value * exchangeRate.rate).toFixed(2);
      }
    })
  );
};

currenciesStore.set([
  {
    sign: "$",
    code: "USD",
  },
  {
    sign: "€",
    code: "EUR",
  },
  {
    sign: "£",
    code: "GBP",
  },
]);

currenciesStore.setActive(DEFAULT_CURRENCY);
