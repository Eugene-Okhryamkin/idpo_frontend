import { GET_USERS_REQUEST, GET_USERS_FAIL, GET_USERS_SUCCESS } from "Actions/getUsersAction";

const initState = {
    users: [],
    error: ""
}

export const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {...state, users: action.payload, error: ""}

        case GET_USERS_FAIL:
            return {...state, users: [], error: action.payload}

        case GET_USERS_SUCCESS:
            return {...state, users: action.payload, error: ""}

        default:
            return state;
    }

};


