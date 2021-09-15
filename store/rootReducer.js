import {combineReducers} from "redux";
import gamesReducer from "./games/reducer";
import reviewsReducer from "./reviews/reducer";

const rootReducer = combineReducers({
    games: gamesReducer,
    reviews: reviewsReducer
})

export default rootReducer;