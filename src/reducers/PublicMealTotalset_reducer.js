// PublicMealTotalset_SUCCESS
export default (state = null, action) => {
    switch (action.type) {

        case 'PublicMealTotalset_SUCCESS':
            return action.PublicCerealTotaldata;
        case 'PublicMealTotalset_FAIL':
            return "";
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};