// CdNewScoreRecord_SUCCESS
export default (state = null, action) => {
    switch (action.type) {
        case 'CdNewScoreRecord_SUCCESS':
            return action.CdNewScoreRecorddata;
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};