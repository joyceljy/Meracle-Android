// AvgPublicMemeryOrderBy_SUCCESS
// AvgPublicMemeryOrderBydata
export default (state = null, action) => {
    switch (action.type) {

        case 'AvgPublicMemeryOrderBy_SUCCESS':
            return action.AvgPublicMemeryOrderBydata;
        case 'AvgPublicMemeryOrderBy_FAIL':
            return "";
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};