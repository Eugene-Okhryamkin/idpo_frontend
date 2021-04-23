import { GET_LEARN_DATA_SUCCESS, GET_LEARN_DATA_FAIL, GET_LEARN_DATA_REQUEST } from "Actions/getLearnTableData";

const initState = {
    learnData: [],
    error: ""
}

export const learnDataReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_LEARN_DATA_REQUEST:
            return {...state, learnData: action.payload, error: ""}

        case GET_LEARN_DATA_FAIL:
            return {...state, learnData: [], error: action.payload}

        case GET_LEARN_DATA_SUCCESS:
            return {...state, learnData: action.payload, error: ""}

        default:
            return state;
    }

};

