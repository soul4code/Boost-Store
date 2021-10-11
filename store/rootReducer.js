import {combineReducers} from "redux";
import gamesReducer from "./games/reducer";
import reviewsReducer from "./reviews/reducer";
import langReducer from "./main/reducer";

const rootReducer = combineReducers({
    games: gamesReducer,
    reviews: reviewsReducer,
    lang: langReducer,
})

export default rootReducer;