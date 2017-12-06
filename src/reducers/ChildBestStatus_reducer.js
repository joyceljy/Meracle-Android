// SetChildBestStatus_SUCCESS
export default (state = null, action) => {
    switch (action.type) {
        
        case 'SetChildBestStatus_SUCCESS':
            return action.SetChildBestStatusdata;
            
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};