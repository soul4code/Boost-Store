import { api } from "../../utils/api/api";
import { ID } from "@datorama/akita";

export function addToCart(data: {
  NAME: string;
  EMAIL: string;
  PRICE: string;
  CURRENCY: string;
}): Promise<{ ORDER_ID: ID }> {
  return api.post("order", data);
}
