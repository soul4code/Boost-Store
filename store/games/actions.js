import { SET_GAMES } from "./types"
import { SET_CURRENT_GAME } from "./types";
import { SET_CURRENT_GAME_SERVICES } from "./types";
import { SET_FILTER } from "./types";


export const setGames = (games) => {
    return {
        type: SET_GAMES,
        payload: games
    }
}

export const setCurrentGame = (currentGame)=>{
    return {
        type: SET_CURRENT_GAME,
        currentGame
    }
}

export const setCurrentGameServices = (currentGameServices)=>{
    return {
        type: SET_CURRENT_GAME_SERVICES,
        currentGameServices
    }
}

export const setFilter = (filter)=>{
    return {
        type: SET_FILTER,
        filter
    }
}