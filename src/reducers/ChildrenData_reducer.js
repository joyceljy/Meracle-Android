export default (state = null, action) => {
    switch (action.type) {
        case 'GET_CHILDDATA_SUCCESS':
            return { children_data: action.child_data };
        case 'GET_CHILDDATA_FAIL':
            return "";
            case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};