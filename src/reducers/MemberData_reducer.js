export default (state = null, action) => {
    switch (action.type) {
        case 'GET_MEMBERDATA_SUCCESS':
            return { member_data: action.member_data };
        case 'GET_MEMBERDATA_FAIL':
            return "";
            case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};