// PublicBody_SUCCESS
export default (state = null, action) => {
    switch (action.type) {

        case 'PublicBody_SUCCESS':
            return action.PublicBody;
        case 'PublicBody_FAIL':
            return "";
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};