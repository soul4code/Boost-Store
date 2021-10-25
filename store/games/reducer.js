import { SET_GAMES } from "./types";
import { SET_CURRENT_GAME } from "./types";
import { SET_CURRENT_GAME_SERVICES } from "./types";
import { SET_FILTER } from "./types";

const initialState = {
    games: [],
    currentGame: null,
    currentGameServices: [],
    isFilter: false,
    filter:[]
}

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAMES:
            return {...state, games: action.payload}

        case SET_CURRENT_GAME:
            return {...state, currentGame: action.currentGame}

        case SET_CURRENT_GAME_SERVICES:
            return {...state, currentGameServices: action.currentGameServices}

        case SET_FILTER:
            return {...state, filter: action.filter}

        default:
            return state
    }
}

export default gamesReducer;