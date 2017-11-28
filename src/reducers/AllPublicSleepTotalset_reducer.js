// PublicSleepTotalset_SUCCESS
export default (state = null, action) => {
    switch (action.type) {

        case 'PublicSleepTotalset_SUCCESS':
            return action.PublicSleepTotalset;
        case 'PublicSleepTotalset_FAIL':
            return "";
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};