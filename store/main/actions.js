import { SET_AUTH, SET_LANGUAGE, SET_AUTH_TOKEN } from "./types"

export const setLanguage = (lang) => {
    return {
        type: SET_LANGUAGE,
        payload: lang
    }
}

export const setAuth = (auth)=>({
    type: SET_AUTH,
    auth
})

export const setAuthToken = (token)=>({
    type: SET_AUTH_TOKEN,
    token
})

