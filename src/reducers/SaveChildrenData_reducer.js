export default (state = null, action) => {
    switch (action.type) {
        case 'SAVE_CHILDDATA_SUCCESS':
            action.Callback("修改成功")
            return true;
        case 'SAVE_CHILDDATA_FAIL':
            return false;
            case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};