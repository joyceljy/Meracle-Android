// PublicBodyTotal_SUCCESS
export default (state = null, action) => {
    switch (action.type) {

        case 'PublicBodyTotal_SUCCESS':
            return action.PublicBodyTotal;
        case 'PublicBodyTotal_FAIL':
            return "";
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};