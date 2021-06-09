import { GET_USER } from "Actions/getUserAction";

const initState = {
    user: null
}

export const getUser = (state = initState, action)  => {
    switch (action.type) {
        case GET_USER:
            return { ...state, user: action.payload }

        default:
            return state;
    }
}