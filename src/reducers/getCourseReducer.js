import { GET_COURSE } from "Actions/getCourseAction";

const initState = {
    course: null
}

export const getCourse = (state = initState, action)  => {
    switch (action.type) {
        case GET_COURSE:
            return { ...state, course: action.payload }

        default:
            return state;
    }
}