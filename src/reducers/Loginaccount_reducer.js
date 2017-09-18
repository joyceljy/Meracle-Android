export default (state=null, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return action.loginuser;
        case 'LOGIN_FAIL':
            return action.loginuser;
            case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};