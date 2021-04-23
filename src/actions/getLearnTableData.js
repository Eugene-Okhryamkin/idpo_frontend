export const GET_LEARN_DATA_REQUEST = "GET_LEARN_DATA_REQUEST";
export const GET_LEARN_DATA_SUCCESS = "GET_LEARN_DATA_SUCCESS";
export const GET_LEARN_DATA_FAIL = "GET_LEARN_DATA_FAIL";

export const getLearnData = (url) => dispatch => {
    dispatch({
        type: GET_LEARN_DATA_REQUEST,
        payload: []
    })

    const URL = url ? `http://194.67.116.27:8080/api/get_program_list${url}` : `http://194.67.116.27:8080/api/get_program_list`;

    return fetch(URL)
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                dispatch({
                    type: GET_LEARN_DATA_FAIL,
                    payload: data.error
                })
            } else {
                dispatch({
                    type: GET_LEARN_DATA_SUCCESS,
                    payload: data
                })
            }
        })
}

