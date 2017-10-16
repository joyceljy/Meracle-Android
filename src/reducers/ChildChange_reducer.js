export default (state = null, action) => {
    switch (action.type) {
        
        case 'CHILD_CHANGE_SUCCESS':
            return action.child_name;
            
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};