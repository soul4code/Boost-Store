import { SET_GAMES, SET_CURRENT_GAME, SET_CURRENT_GAME_SERVICES, SET_FILTER, SET_CURRENT_CATEGORIES } from "./types";

const initialState = {
    games: [],
    currentGame: null,
    currentGameServices: [],
    isFilter: false,
    filter:[],
    categoriesList:[]
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

        case SET_CURRENT_CATEGORIES:
            return {...state, categoriesList: action.categoriesList}

        default:
            return state
    }
}

export default gamesReducer;