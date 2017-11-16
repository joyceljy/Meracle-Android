export default (state = [], action) => {
    switch (action.type) {
        case 'GET_POINT_SUCCESS':
            return action.quizPointArray;
        default:
            return state;
    }
};