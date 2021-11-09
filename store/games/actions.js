import { SET_GAMES, SET_CURRENT_GAME, SET_CURRENT_GAME_SERVICES, SET_FILTER, SET_CURRENT_CATEGORIES } from "./types";


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

export const setCurrentCategories = (categoriesLis)=>{
    return {
        type: SET_CURRENT_CATEGORIES,
        categoriesLis
    }
}