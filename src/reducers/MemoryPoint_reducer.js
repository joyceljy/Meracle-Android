export default (state = [], action) => {
    switch (action.type) {
        case 'GET_POINT_SUCCESS':
            return action.quizPointArray;

        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};