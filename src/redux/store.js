import { combineReducers, createStore } from "redux";
import globalRedusers from "./globalRedusers";

let redusers = combineReducers({
    stateForm: globalRedusers,
})


let store = createStore(redusers);

export default store;