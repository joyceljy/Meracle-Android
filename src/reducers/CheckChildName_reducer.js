export default (state = null, action) => {
    switch (action.type) {
        case 'CHECK_NAME_SUCCESS':
            return true;
        case 'CHECK_NAME_FAIL':
            console.log(action.Message)
            action.Callback(action.Message)
            return "";
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};