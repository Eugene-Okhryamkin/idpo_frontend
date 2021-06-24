import { GET_COURSES_FAIL, GET_COURSES_REQUEST, GET_COURSES_SUCCESS } from "Actions/getCoursesActions";

const initState = {
    courses: [],
    error: ""
}

export const coursesReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_COURSES_REQUEST:
            return {...state, courses: action.payload, error: ""}

        case GET_COURSES_FAIL:
            return {...state, courses: [], error: action.payload}

        case GET_COURSES_SUCCESS:
            return {...state, courses: action.payload, error: ""}

        default:
            return state;
    }
};