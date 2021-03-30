import {SET_INFO_BY_ID} from "Actions/getInfoByIDAction";

const initState = {
    id: null
}

export const infoReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_INFO_BY_ID:
            return { ...state, id: action.payload }

        default:
            return state
    }
};