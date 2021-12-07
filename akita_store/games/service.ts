import { gamesStore } from "./state";
import { Game } from "./model";

export function setGames(games: Game[]): void {
  gamesStore.set(games);
}
