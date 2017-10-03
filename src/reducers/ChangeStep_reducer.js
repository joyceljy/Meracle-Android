export default (state = null, action) => {
    switch (action.type) {
        
        case 'CHANGE_CHILDREG_STEP':
            return action.childRegStep;
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};