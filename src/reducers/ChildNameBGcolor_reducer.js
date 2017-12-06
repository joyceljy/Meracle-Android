// SetChildNameBG_SUCCESS
export default (state = null, action) => {
    switch (action.type) {

        case 'SetChildNameBG_SUCCESS':
            return action.SetChildNameBG_color;
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};