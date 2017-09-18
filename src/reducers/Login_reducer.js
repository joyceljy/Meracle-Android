export default (state = null, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log(action.Message)
            action.Callback(action.Message)
            return action.Message;
        case 'LOGIN_FAIL':
            console.log(action.Message)
            action.Callback(action.Message)
            return action.Message;
            case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};