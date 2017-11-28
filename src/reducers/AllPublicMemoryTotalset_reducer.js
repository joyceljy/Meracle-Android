// PublicMemoryTotalset_SUCCESS
// PublicMemoryTotalset
export default (state = null, action) => {
    switch (action.type) {

        case 'PublicMemoryTotalset_SUCCESS':
            return action.PublicMemoryTotalset;
        case 'PublicMemoryTotalset_FAIL':
            return "";
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};