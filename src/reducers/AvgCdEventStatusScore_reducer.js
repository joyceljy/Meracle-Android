// AvgCdEventStatusScore_SUCCESS
export default (state = null, action) => {
    switch (action.type) {
        case 'AvgCdEventStatusScore_SUCCESS':
            return action.AvgCdEventStatusScoredata;
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};