import { createEntityQuery, createEntityStore } from "@datorama/akita";
import { Game } from "./model";

export const gamesStore = createEntityStore<Game>({}, { name: "games" });

export const gamesQuery = createEntityQuery<Game>(gamesStore);

export const games$ = gamesQuery.selectAll();
