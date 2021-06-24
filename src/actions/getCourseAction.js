export const GET_COURSE = "GET_COURSE";

export const getCourse = course => ({
    type: GET_COURSE,
    payload: course
});