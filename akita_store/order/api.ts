import { api } from "../../utils/api/api";
import { ID } from "@datorama/akita";

export function addToCart(data: {
  NAME: string;
  PRICE: string;
  id: ID;
}): Promise<void> {
  return api.post("order", data);
}
