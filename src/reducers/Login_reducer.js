export default (state=null, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return true;
        case 'LOGIN_FAIL':
            return false;
        default:
            return state;
    }
};