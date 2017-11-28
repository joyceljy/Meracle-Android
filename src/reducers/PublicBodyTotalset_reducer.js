// PublicBodyTotalset_SUCCESS

export default (state = null, action) => {
    switch (action.type) {

        case 'PublicBodyTotalset_SUCCESS':
            return action.PublicBodyTotalset;
        case 'PublicBodyTotalset_FAIL':
            return "";
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};