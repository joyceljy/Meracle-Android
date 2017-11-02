export default (state = null, action) => {
    switch (action.type) {
        case 'REG_SURVEY_SUCCESS':
            console.log(action.Message)
            action.Callback(action.Message)
            return true;
        case 'REG_SURVEY_FAIL':
            return false;
            case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};