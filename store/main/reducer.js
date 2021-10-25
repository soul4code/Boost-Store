import { SET_LANGUAGE } from "./types";

const initialState = {
    lang: ''
}

const langReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LANGUAGE:
            return {...state, lang: action.payload}
        default:
            return state
    }
}

export default langReducer;