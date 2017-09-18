export default (state=null, action) => {
    switch (action.type) {
        case 'SAVE_CHILDIMAGE_SUCCESS':
            return action.child_imageurl;
            case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};