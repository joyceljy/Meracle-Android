export default (state = [], action) => {
    switch (action.type) {
        case 'SAVE_POINT_SUCCESS':
            action.Callback("儲存成功")
            return true;
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};