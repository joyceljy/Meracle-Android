export default (state =  null , action) => {
    switch (action.type) {
        case 'SAVE_NAME':
            return action.name;
        default:
            return state;
    }
};
