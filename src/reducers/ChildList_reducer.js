export default (state = null, action) => {
    switch (action.type) {

        case 'ChildrenList_SUCCESS':
            return action.childList;
        case 'ChildrenList_Fail':
            return "";
            case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};