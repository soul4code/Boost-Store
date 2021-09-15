import rootReducer from "./rootReducer";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware())
);

export default store;