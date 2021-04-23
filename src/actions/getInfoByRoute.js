export const GET_INFO_BY_ROUTE = "GET_INFO_BY_ROUTE";

export const getInfoByRoute = route => ({
    type: GET_INFO_BY_ROUTE,
    payload: route
});