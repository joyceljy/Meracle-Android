export default (state = [], action) => {
    switch (action.type) {
        case 'SAVE_POINT_SUCCESS':
            
            return true;
        default:
            return state;
    }
};