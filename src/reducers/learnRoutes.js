import {GET_INFO_BY_ROUTE} from "Actions/getInfoByRoute";

const initState = {
    route: ""
}

export const learnRoutes = (state = initState, action) => {
    switch (action.type) {
        case GET_INFO_BY_ROUTE:
            return { ...state, route: action.payload }

        default:
            return { ...state }
    }
}

