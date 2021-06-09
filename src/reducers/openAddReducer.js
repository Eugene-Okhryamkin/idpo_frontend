import { ADD_PAGE } from "Actions/openAddPage";

const initState = {
    isOpen: false
}

export const addReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_PAGE:
            return { ...state, isOpen: action.payload }


        default:
            return state;
    }
}