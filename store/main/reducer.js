import { SET_AUTH, SET_LANGUAGE, SET_AUTH_TOKEN } from "./types";

const initialState = {
    lang: '',
    isAuth: false,
    authToken: ''
}

const langReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LANGUAGE:
            return {...state, lang: action.payload}

        case SET_AUTH:
            return {...state, isAuth: action.auth}

        case SET_AUTH_TOKEN:
            return {...state, authToken: action.token}

        default:
            return state
    }
}

export default langReducer;