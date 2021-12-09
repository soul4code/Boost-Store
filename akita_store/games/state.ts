import {
  createEntityQuery,
  createEntityStore,
  EntityState,
} from "@datorama/akita";
import { Game } from "./model";

export const gamesStore = createEntityStore<EntityState<Game>>(
  {},
  { name: "games" }
);

export const gamesQuery = createEntityQuery<EntityState<Game>>(gamesStore);

export const games$ = gamesQuery.selectAll();
