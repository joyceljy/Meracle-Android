// PublicSleepAvgScoreOrderby_SUCCESS
export default (state = null, action) => {
    switch (action.type) {

        case 'PublicSleepAvgScoreOrderby_SUCCESS':
            return action.PublicSleepAvgScoreOrderbydata;
        case 'PublicSleepAvgScoreOrderby_FAIL':
            return "";
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};