import { OPEN_EDIT_PAGE } from "Actions/openEditAction";

const initState = {
    isOpen: false
}

export const editReducer = (state = initState, action) => {
    switch (action.type) {
        case OPEN_EDIT_PAGE:
            return { ...state, isOpen: action.payload }


        default:
            return state;
    }
}