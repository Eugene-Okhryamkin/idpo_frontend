import {combineReducers} from "redux";
import {infoReducer} from "Reducers/infoReducer";

export const rootReducer = combineReducers ({
    info: infoReducer
});