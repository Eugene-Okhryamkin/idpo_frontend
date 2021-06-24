import { GET_CATEGORY } from "Actions/getCategoryAction";

const initState = {
    category: null
}

export const getCategory = (state = initState, action)  => {
    switch (action.type) {
        case GET_CATEGORY:
            return { ...state, category: action.payload }

        default:
            return state;
    }
}