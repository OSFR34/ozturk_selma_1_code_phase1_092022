import loginReducer from "./userReducers";
import tokenReducer from "./tokenReducer";
import { combineReducers } from "redux";

const reducers = combineReducers ({
    loginReducer, tokenReducer
})

export default reducers;