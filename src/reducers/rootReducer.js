import {combineReducers} from "redux";
import {infoReducer} from "Reducers/infoReducer";
import {learnDataReducer} from "Reducers/learnDataReducer";
import {learnRoutes} from "Reducers/learnRoutes";

export const rootReducer = combineReducers ({
    info: infoReducer,
    learn: learnDataReducer,
    learnRoute: learnRoutes
});