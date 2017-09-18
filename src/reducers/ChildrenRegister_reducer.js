export default (state = null, action) => {
    switch (action.type) {
        case 'CHILD_REG_SUCCESS':
            console.log(action.Message)
            action.Callback(action.Message)
            return true;
        case 'CHILD_REG_FAIL':
            console.log(action.Message)
            action.Callback(action.Message)
            return false;
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};