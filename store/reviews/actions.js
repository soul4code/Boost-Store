import { SET_REVIEWS } from "./types"

export const setReviews = (reviews) => {
    return {
        type: SET_REVIEWS,
        payload: reviews
    }
}