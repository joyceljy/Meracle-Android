export default (state = null, action) => {
    switch (action.type) {
        case 'FORGETPASS_SUCCESS':
            console.log(action.Message)
            action.Callback(action.Message)
            return true;
        case 'FORGETPASS_FAIL':
            return false;
            case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};