import { combineReducers, createStore } from "redux";
import globalRedusers from "./globalRedusers";

let redusers = combineReducers({
    state: globalRedusers,
})


let store = createStore(redusers);

export default store;