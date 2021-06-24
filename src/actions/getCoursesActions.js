export const GET_COURSES_REQUEST = "GET_COURSES_REQUEST";
export const GET_COURSES_SUCCESS = "GET_COURSES_SUCCESS";
export const GET_COURSES_FAIL = "GET_COURSES_FAIL";

export const getCourses = () => dispatch => {
    dispatch({
        type: GET_COURSES_REQUEST,
        payload: []
    })

    return fetch("http://194.67.116.27:8080/api/get_program_list", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
        }
    })
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                dispatch({
                    type: GET_COURSES_FAIL,
                    payload: data.error
                })
            } else {
                dispatch({
                    type: GET_COURSES_SUCCESS,
                    payload: data
                })
            }
        })
};