// AvgPublicMemery_SUCCESS
// AvgPublicMemerydata
export default (state = null, action) => {
    switch (action.type) {

        case 'AvgPublicMemery_SUCCESS':
            return action.AvgPublicMemerydata;
        case 'AvgPublicMemery_FAIL':
            return "";
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};