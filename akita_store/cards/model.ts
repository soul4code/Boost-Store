import { ID } from "@datorama/akita";
import { CardTemplateValue } from "../../configs/types";

export interface CardExtraOption {
  ID: ID;
  INFO: string;
  IS_PRICE: boolean;
  MEASURE: string;
  PRICE: string;
  SIGN: string;
  TITLE: string;
}

export interface Position {
  ID: ID;
  IMG: string;
  TEXT: string;
}

export interface Card {
  ADVANTAGES: unknown[];
  CODE: string;
  DAYS_IN_COUNT: number;
  DEFAULT_VALUE_FIRST: number;
  DEFAULT_VALUE_SECOND: number;
  DENSITY: number;
  DESCRIPTION: string;
  EXTRA_OPTIONS: CardExtraOption[];
  ID: ID;
  IS_EXTRA_OPTIONS: boolean;
  IS_INPUT: boolean;
  IS_POSITION_LIST: boolean;
  IS_PROGRESSBAR: boolean;
  MEASURE: string;
  NAME: string;
  POSITION_LIST: Position[];
  PRICE: string;
  PROPERTY_CARD_TEMPLATE_VALUE: CardTemplateValue;
  SIGN: string;
  STEP: number;
  TITLE: string;
}
