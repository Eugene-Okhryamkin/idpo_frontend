import {combineReducers} from "redux";
import {infoReducer} from "Reducers/infoReducer";
import {learnDataReducer} from "Reducers/learnDataReducer";
import {learnRoutes} from "Reducers/learnRoutes";
import {userReducer} from "Reducers/userReducer";
import { usersReducer } from "Reducers/usersReducer";
import {editReducer} from "Reducers/openEditReducer";
import {getUser} from "Reducers/getUserReducer";
import {addReducer} from "Reducers/openAddReducer";

export const rootReducer = combineReducers ({
    info: infoReducer,
    learn: learnDataReducer,
    learnRoute: learnRoutes,
    user: userReducer,
    users: usersReducer,
    edit: editReducer,
    getUser: getUser,
    add: addReducer
});