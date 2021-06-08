import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESSFUL } from "Actions/authAction.js";
import { SET_USER } from "Actions/setUserAction";
import { LOGOUT } from "Actions/logoutAction";

let initState = {
    isAuthenticated: false,
    isLoading: false,
    error: "",
    user: null
}

export const userReducer = (state = initState, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return { ...state, user: action.payload, error: "", isLoading: true, isAuthenticated: false }

        case LOGIN_FAIL:
            return { ...state, user: {}, error: action.payload, isLoading: false, isAuthenticated: false }

        case LOGIN_SUCCESSFUL:
            return { ...state, user: action.payload, error: "", isLoading: false, isAuthenticated: true }

        case SET_USER:
            return { ...state, user: action.payload, error: "", isLoading: false, isAuthenticated: true }

        case LOGOUT:
            return { ...state, user: {}, error: "", isLoading: false, isAuthenticated: false }

        default:
            return state;
    }
}