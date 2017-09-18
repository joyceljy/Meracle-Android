export default (state = null, action) => {
    switch (action.type) {
        
        case 'CHILD_CHANGE_SUCCESS':
            return "";
            //小孩姓名登入時一開始為空字串
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};