export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "GET_USERS_FAIL";

export const getUsers = () => dispatch => {
    dispatch({
        type: GET_USERS_REQUEST,
        payload: []
    })

    return fetch("http://194.67.116.27:8080/api/edit/get_user_list", {
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
                    type: GET_USERS_FAIL,
                    payload: data.error
                })
            } else {
                console.log(data);
                dispatch({
                    type: GET_USERS_SUCCESS,
                    payload: data
                })
            }
        })
};