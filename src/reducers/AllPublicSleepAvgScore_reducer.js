// PublicSleepAvgScore_SUCCESS
export default (state = null, action) => {
    switch (action.type) {

        case 'PublicSleepAvgScore_SUCCESS':
            return action.PublicSleepAvgScoredata;
        case 'PublicSleepAvgScore_FAIL':
            return "";
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};