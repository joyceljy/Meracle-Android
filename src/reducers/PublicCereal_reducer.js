// PublicCerealOrderBy_SUCCESS
export default (state = null, action) => {
    switch (action.type) {

        case 'PublicCerealOrderBy_SUCCESS':
            return action.PublicCerealOrderBydata;
        case 'PublicCerealOrderBy_FAIL':
            return "";
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};