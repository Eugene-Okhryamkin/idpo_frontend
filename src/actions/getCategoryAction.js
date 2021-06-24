export const GET_CATEGORY = "GET_CATEGORY";

export const getCategory = category => ({
    type: GET_CATEGORY,
    payload: category
});