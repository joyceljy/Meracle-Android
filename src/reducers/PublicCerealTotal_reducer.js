// PublicCerealTotal_SUCCESS
export default (state = null, action) => {
    switch (action.type) {

        case 'PublicCerealTotal_SUCCESS':
            return action.PublicCerealTotaldata;
        case 'PublicCerealTotal_FAIL':
            return "";
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};