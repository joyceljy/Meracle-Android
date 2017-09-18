export default (state=null, action) => {
    switch (action.type) {
        case 'SAVE_MEMBERIMAGE_SUCCESS':
            return action.member_imageurl;
            case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};