export default (state = null, action) => {
    switch (action.type) {
        case 'Editpwd_SUCCESS':
            console.log(action.Message)
            action.Callback(action.Message)
            return true;
        case 'Editpwd_FAIL':
            return false;
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};