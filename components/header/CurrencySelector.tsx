import Link from "next/link";
import React from "react";
import cx from "classnames";
import {
  currencies$,
  currenciesService,
  Currency,
  currentCurrency$,
} from "../../akita_store/currencies";
import { useObservableState } from "observable-hooks";

interface CurrencySelectorItemProps {
  currency: Currency;
  isActive: boolean;
  onSelect: () => void;
}

const CurrencySelectorItem: React.FunctionComponent<
  CurrencySelectorItemProps
> = ({ currency, onSelect, isActive }) => {
  const classes = cx("select__list-link", {
    "select__list-link_active": isActive,
  });
  return (
    <li className="select__list-item">
      <a onClick={onSelect} className={classes}>
        {currency.code}, {currency.sign}
      </a>
    </li>
  );
};

const CurrencySelector: React.FunctionComponent = () => {
  const currencies = useObservableState(currencies$);
  const currentCurrency = useObservableState(currentCurrency$);
  const setCurrency = currenciesService.setCurrentCurrency;

  return (
    <div className="select header__select header__select header__select-currency">
      <div className="select__field">
        <span className="select__field-text">
          {currentCurrency?.code}, {currentCurrency?.sign}
        </span>
        <svg
          className="select__field-icon"
          width="9"
          height="5"
          viewBox="0 0 9 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.74694 4.89542L8.90279 0.609586C9.03566 0.467701 9.03185 0.241607 8.89427 0.104577C8.76005 -0.0291042 8.54729 -0.0291042 8.4131 0.104577L4.5021 4.13791L0.591098 0.104577C0.455871 -0.0348594 0.236633 -0.0348594 0.101406 0.104577C-0.0338011 0.244055 -0.0338011 0.470128 0.101406 0.609586L4.25725 4.89542C4.3925 5.03486 4.61172 5.03486 4.74694 4.89542Z" />
        </svg>
      </div>
      <div className="select__wrap-list">
        <ul className="select__list">
          {currencies?.map((currency) => {
            return (
              <CurrencySelectorItem
                key={currency.code}
                currency={currency}
                isActive={currency.code === currentCurrency.code}
                onSelect={() => setCurrency(currency.code)}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CurrencySelector;
